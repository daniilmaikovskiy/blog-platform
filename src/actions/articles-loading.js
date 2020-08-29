import {
  ARTICLES_COUNT_IS_CHANGED,
  ARTICLES_LOADING_ERROR,
  ARTICLES_LOADING_START,
  ARTICLES_LOADING_END,
} from './action-types';
import { articlesIsChanged } from './action-creators';

const articlesCountIsChanged = (articlesCount) => {
  return {
    type: ARTICLES_COUNT_IS_CHANGED,
    articlesCount,
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
      .then(({ articlesCount, articles }) => {
        dispatch(articlesIsChanged(articles));
        dispatch(articlesCountIsChanged(articlesCount));
      })
      .catch((error) => dispatch(articlesLoadingError(error.message)))
      .finally(() => dispatch(articlesLoadingEnd()));
  };
};

export default articlesLoading;
