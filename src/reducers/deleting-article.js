import {
  DELETING_ARTICLE_LOADING_ERROR,
  DELETING_ARTICLE_LOADING_START,
  DELETING_ARTICLE_LOADING_END,
  DELETED_ARTICLE,
} from '../actions/action-types';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
};

const deletingArticle = (state = initialState, action) => {
  switch (action.type) {
    case DELETING_ARTICLE_LOADING_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.message,
      };
    case DELETING_ARTICLE_LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case DELETING_ARTICLE_LOADING_END:
      return {
        ...state,
        loading: false,
      };
    case DELETED_ARTICLE:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
      };
    default:
      return state;
  }
};

export default deletingArticle;
