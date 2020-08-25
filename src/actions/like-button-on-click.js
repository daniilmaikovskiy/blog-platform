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
    const currentArticlePageIsTarget =
      currentArticlePage !== null && currentArticlePage.slug === slug;

    let newArticles = articles;
    let newCurrentArticlePage = currentArticlePage;

    if (isFavorited) {
      realworldService
        .unfavoriteArticle(slug, token)
        .then(({ article }) => {
          if (targetArticleIndex !== -1) {
            newArticles = [
              ...articles.slice(0, targetArticleIndex),
              article,
              ...articles.slice(targetArticleIndex + 1),
            ];
          }

          if (currentArticlePageIsTarget) {
            newCurrentArticlePage = article;
          }

          dispatch(articleLiked(newArticles, newCurrentArticlePage));
        })
        .catch(() => {});
    } else {
      realworldService
        .favoriteArticle(slug, token)
        .then(({ article }) => {
          if (targetArticleIndex !== -1) {
            newArticles = [
              ...articles.slice(0, targetArticleIndex),
              article,
              ...articles.slice(targetArticleIndex + 1),
            ];
          }

          if (currentArticlePageIsTarget) {
            newCurrentArticlePage = article;
          }

          dispatch(articleLiked(newArticles, newCurrentArticlePage));
        })
        .catch(() => {});
    }
  };
};

export default likeButtonOnClick;
