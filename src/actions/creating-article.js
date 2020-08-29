import Cookies from 'js-cookie';
import {
  CREATING_ARTICLE_LOADING_ERROR,
  CREATING_ARTICLE_LOADING_START,
  CREATING_ARTICLE_LOADING_END,
  CREATING_ARTICLE_SUCCESS,
} from './action-types';
import { USER_DATA_COOKIE_NAME } from '../global-settings';
import logouting from './logouting';
import { articlePageIsChanged } from './action-creators';

const creatingArticleLoadingError = (message) => {
  return {
    type: CREATING_ARTICLE_LOADING_ERROR,
    message,
  };
};

const creatingArticleLoadingStart = () => {
  return {
    type: CREATING_ARTICLE_LOADING_START,
  };
};

const creatingArticleLoadingEnd = () => {
  return {
    type: CREATING_ARTICLE_LOADING_END,
  };
};

const creatingArticleSuccess = () => {
  return {
    type: CREATING_ARTICLE_SUCCESS,
  };
};

const creatingArticle = (realworldService, { title, description, body, tagList }) => {
  let token;

  return (dispatch) => {
    try {
      const { user } = JSON.parse(Cookies.get(USER_DATA_COOKIE_NAME));
      token = user.token;
    } catch {
      dispatch(logouting());
      return;
    }

    dispatch(creatingArticleLoadingStart());

    const json = JSON.stringify({ article: { title, description, body, tagList } });

    realworldService
      .createArticle(json, token)
      .then(({ article }) => {
        dispatch(articlePageIsChanged(article));
        dispatch(creatingArticleSuccess());
      })
      .catch((error) => dispatch(creatingArticleLoadingError(error.message)))
      .finally(() => dispatch(creatingArticleLoadingEnd()));
  };
};

export default creatingArticle;
