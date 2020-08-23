import Cookies from 'js-cookie';
import {
  EDITING_ARTICLE_LOADING_ERROR,
  EDITING_ARTICLE_LOADING_START,
  EDITING_ARTICLE_LOADING_END,
  EDITING_ARTICLE_SUCCESS,
} from './action-types';
import logouting from './logouting';
import { USER_DATA_COOKIE_NAME } from '../global-settings';

const editingArticleLoadingError = (message) => {
  return {
    type: EDITING_ARTICLE_LOADING_ERROR,
    message,
  };
};

const editingArticleLoadingStart = () => {
  return {
    type: EDITING_ARTICLE_LOADING_START,
  };
};

const editingArticleLoadingEnd = () => {
  return {
    type: EDITING_ARTICLE_LOADING_END,
  };
};

const editingArticleSuccess = () => {
  return {
    type: EDITING_ARTICLE_SUCCESS,
  };
};

const editingArticle = (realworldService, slug, data) => {
  let token;

  return (dispatch) => {
    try {
      const { user } = JSON.parse(Cookies.get(USER_DATA_COOKIE_NAME));
      token = user.token;
    } catch {
      dispatch(logouting());
      return;
    }

    const json = JSON.stringify({ article: data });

    dispatch(editingArticleLoadingStart());

    realworldService
      .updateArticle(slug, token, json)
      .then(() => {
        dispatch(editingArticleSuccess());
      })
      .catch((error) => dispatch(editingArticleLoadingError(error.message)))
      .finally(() => dispatch(editingArticleLoadingEnd()));
  };
};

export default editingArticle;
