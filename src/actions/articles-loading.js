import {
  ARTICLES_IS_RECEIVED,
  ARTICLES_LOADING_ERROR,
  ARTICLES_LOADING_START,
  ARTICLES_LOADING_END,
} from './action-types';

const articlesIsReceived = (articlesCount, articles) => {
  return {
    type: ARTICLES_IS_RECEIVED,
    articlesCount,
    articles,
  };
};

const articlesLoadingError = (message) => {
  return {
    type: ARTICLES_LOADING_ERROR,
    message,
  };
};

const articlesLoadingStart = () => {
  return {
    type: ARTICLES_LOADING_START,
  };
};

const articlesLoadingEnd = () => {
  return {
    type: ARTICLES_LOADING_END,
  };
};

const articlesLoading = (realworldService, page = 1) => {
  return (dispatch) => {
    dispatch(articlesLoadingStart());

    realworldService
      .getArticles(page)
      .then(({ articlesCount, articles }) => dispatch(articlesIsReceived(articlesCount, articles)))
      .catch((error) => dispatch(articlesLoadingError(error.message)))
      .finally(() => dispatch(articlesLoadingEnd()));
  };
};

export default articlesLoading;
