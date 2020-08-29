import Cookies from 'js-cookie';
import { USER_DATA_COOKIE_NAME } from '../global-settings';
import logouting from './logouting';
import { articlesIsChanged, articlePageIsChanged } from './action-creators';

const likeButtonOnClick = (realworldService, slug, isFavorited, isCurrentArticlePage = false) => {
  return (dispatch, getState) => {
    let token;

    try {
      const { user } = JSON.parse(Cookies.get(USER_DATA_COOKIE_NAME));
      token = user.token;
    } catch {
      dispatch(logouting());
      return;
    }

    const {
      articles: { data: articles },
      articlePage: { current },
    } = getState();
    const targetArticleIndex = articles.findIndex((el) => el.slug === slug);
    const articlesHaveTarget = targetArticleIndex !== -1;

    let articleForInserting = null;

    if (isCurrentArticlePage) {
      articleForInserting = {
        ...current,
        favorited: !isFavorited,
        favoritesCount: current.favoritesCount + (isFavorited ? -1 : 1),
      };
    } else {
      articleForInserting = {
        ...articles[targetArticleIndex],
        favorited: !isFavorited,
        favoritesCount: articles[targetArticleIndex].favoritesCount + (isFavorited ? -1 : 1),
      };
    }

    const insertLikedArticle = (article = articleForInserting) => {
      if (article === null) {
        return;
      }

      let newArticles = articles;

      if (articlesHaveTarget) {
        newArticles = [
          ...articles.slice(0, targetArticleIndex),
          article,
          ...articles.slice(targetArticleIndex + 1),
        ];
      }

      dispatch(articlesIsChanged(newArticles));
      dispatch(articlePageIsChanged(article));
    };

    insertLikedArticle();

    if (isFavorited) {
      realworldService
        .unfavoriteArticle(slug, token)
        .then(({ article }) => insertLikedArticle(article))
        .catch(() => {});
    } else {
      realworldService
        .favoriteArticle(slug, token)
        .then(({ article }) => insertLikedArticle(article))
        .catch(() => {});
    }
  };
};

export default likeButtonOnClick;
