import {
  CREATING_ARTICLE_LOADING_ERROR,
  CREATING_ARTICLE_LOADING_START,
  CREATING_ARTICLE_LOADING_END,
  CREATING_ARTICLE_SUCCESS,
} from '../actions/action-types';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  success: false,
};

const creatingArticle = (state = initialState, action) => {
  switch (action.type) {
    case CREATING_ARTICLE_LOADING_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.message,
      };
    case CREATING_ARTICLE_LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case CREATING_ARTICLE_LOADING_END:
      return {
        ...state,
        loading: false,
      };
    case CREATING_ARTICLE_SUCCESS:
      return {
        ...state,
        success: true,
      };
    default:
      return state;
  }
};

export default creatingArticle;
