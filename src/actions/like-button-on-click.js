import Cookies from 'js-cookie';
import { ARTICLE_LIKED } from './action-types';
import { USER_DATA_COOKIE_NAME } from '../global-settings';
import logouting from './logouting';

const articleLiked = (articles, currentArticlePage) => {
  return {
    type: ARTICLE_LIKED,
    articles,
    currentArticlePage,
  };
};

const likeButtonOnClick = (realworldService, slug, isFavorited) => {
  return (dispatch, getState) => {
    let token;

    try {
      const { user } = JSON.parse(Cookies.get(USER_DATA_COOKIE_NAME));
      token = user.token;
    } catch {
      dispatch(logouting());
      return;
    }

    const { articles, currentArticlePage } = getState();
    const targetArticleIndex = articles.findIndex((el) => el.slug === slug);
    const articlesHaveTarget = targetArticleIndex !== -1;
    const currentArticlePageIsTarget =
      currentArticlePage !== null && currentArticlePage.slug === slug;

    let newArticles = articles;
    let newCurrentArticlePage = currentArticlePage;
    let articleForInserting = null;

    if (articlesHaveTarget) {
      articleForInserting = {
        ...articles[targetArticleIndex],
        favorited: !isFavorited,
        favoritesCount: articles[targetArticleIndex].favoritesCount + (isFavorited ? -1 : 1),
      };
    } else if (currentArticlePageIsTarget) {
      articleForInserting = {
        ...currentArticlePage,
        favorited: !isFavorited,
        favoritesCount: currentArticlePage.favoritesCount + (isFavorited ? -1 : 1),
      };
    }

    const insertLikedArticle = (article = articleForInserting) => {
      if (article === null) {
        return;
      }

      if (articlesHaveTarget) {
        newArticles = [
          ...articles.slice(0, targetArticleIndex),
          article,
          ...articles.slice(targetArticleIndex + 1),
        ];
      }

      if (currentArticlePageIsTarget) {
        newCurrentArticlePage = { ...article };
      }

      dispatch(articleLiked(newArticles, newCurrentArticlePage));
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
