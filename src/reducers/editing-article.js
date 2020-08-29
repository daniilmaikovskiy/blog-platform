import {
  EDITING_ARTICLE_LOADING_ERROR,
  EDITING_ARTICLE_LOADING_START,
  EDITING_ARTICLE_LOADING_END,
  EDITING_ARTICLE_SUCCESS,
} from '../actions/action-types';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  success: false,
};

const editingArticle = (state = initialState, action) => {
  switch (action.type) {
    case EDITING_ARTICLE_LOADING_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.message,
      };
    case EDITING_ARTICLE_LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case EDITING_ARTICLE_LOADING_END:
      return {
        ...state,
        loading: false,
      };
    case EDITING_ARTICLE_SUCCESS:
      return {
        ...state,
        success: true,
      };
    default:
      return state;
  }
};

export default editingArticle;
