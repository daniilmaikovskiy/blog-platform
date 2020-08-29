import {
  ARTICLE_PAGE_LOADING_ERROR,
  ARTICLE_PAGE_LOADING_START,
  ARTICLE_PAGE_LOADING_END,
} from './action-types';
import { articlePageHideDeleteModalWindow, articlePageIsChanged } from './action-creators';

const articlePageLoadingError = (message) => {
  return {
    type: ARTICLE_PAGE_LOADING_ERROR,
    message,
  };
};

const articlePageLoadingStart = () => {
  return {
    type: ARTICLE_PAGE_LOADING_START,
  };
};

const articlePageLoadingEnd = () => {
  return {
    type: ARTICLE_PAGE_LOADING_END,
  };
};

const articlePageLoading = (realworldService, slug) => {
  return (dispatch, getState) => {
    const { data: articles } = getState().articles;
    const targetArticleIndex = articles.findIndex((el) => el.slug === slug);

    if (targetArticleIndex !== -1) {
      dispatch(articlePageIsChanged(articles[targetArticleIndex]));
      dispatch(articlePageHideDeleteModalWindow());
      return;
    }

    dispatch(articlePageLoadingStart());

    realworldService
      .getSingleArticle(slug)
      .then(({ article }) => {
        dispatch(articlePageIsChanged(article));
        dispatch(articlePageHideDeleteModalWindow());
      })
      .catch((error) => dispatch(articlePageLoadingError(error.message)))
      .finally(() => dispatch(articlePageLoadingEnd()));
  };
};

export default articlePageLoading;
