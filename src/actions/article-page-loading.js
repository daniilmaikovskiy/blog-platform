import {
  ARTICLE_PAGE_IS_RECEIVED,
  ARTICLE_PAGE_LOADING_ERROR,
  ARTICLE_PAGE_LOADING_START,
  ARTICLE_PAGE_LOADING_END,
} from './action-types';
import { articlePageHideDeleteModalWindow } from './action-creators';

const articlePageIsReceived = (currentArticlePage) => {
  return {
    type: ARTICLE_PAGE_IS_RECEIVED,
    currentArticlePage,
  };
};

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
  return (dispatch) => {
    dispatch(articlePageLoadingStart());

    realworldService
      .getSingleArticle(slug)
      .then(({ article }) => {
        dispatch(articlePageIsReceived(article));
        dispatch(articlePageHideDeleteModalWindow());
      })
      .catch((error) => dispatch(articlePageLoadingError(error.message)))
      .finally(() => dispatch(articlePageLoadingEnd()));
  };
};

export default articlePageLoading;
