import Cookies from 'js-cookie';
import {
  DELETING_ARTICLE_LOADING_ERROR,
  DELETING_ARTICLE_LOADING_START,
  DELETING_ARTICLE_LOADING_END,
} from './action-types';
import logouting from './logouting';
import { USER_DATA_COOKIE_NAME } from '../global-settings';
import { deletedArticle } from './action-creators';

const deletingArticleLoadingError = (message) => {
  return {
    type: DELETING_ARTICLE_LOADING_ERROR,
    message,
  };
};

const deletingArticleLoadingStart = () => {
  return {
    type: DELETING_ARTICLE_LOADING_START,
  };
};

const deletingArticleLoadingEnd = () => {
  return {
    type: DELETING_ARTICLE_LOADING_END,
  };
};

const deletingArticle = (realworldService, slug) => {
  let token;

  return (dispatch) => {
    try {
      const { user } = JSON.parse(Cookies.get(USER_DATA_COOKIE_NAME));
      token = user.token;
    } catch {
      dispatch(logouting());
      return;
    }

    dispatch(deletingArticleLoadingStart());

    realworldService
      .deleteArticle(slug, token)
      .then(() => dispatch(deletedArticle()))
      .catch((error) => dispatch(deletingArticleLoadingError(error.message)))
      .finally(() => dispatch(deletingArticleLoadingEnd()));
  };
};

export default deletingArticle;
