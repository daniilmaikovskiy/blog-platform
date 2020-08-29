import {
  ARTICLE_PAGE_IS_CHANGED,
  ARTICLE_PAGE_LOADING_ERROR,
  ARTICLE_PAGE_LOADING_START,
  ARTICLE_PAGE_LOADING_END,
  ARTICLE_PAGE_SHOW_DELETE_MODAL_WINDOW,
  ARTICLE_PAGE_HIDE_DELETE_MODAL_WINDOW,
} from '../actions/action-types';

const initialState = {
  current: null,
  loading: false,
  error: false,
  errorMessage: '',
  deleteModalWindowIsShowed: false,
};

const articlePage = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_PAGE_IS_CHANGED:
      return {
        ...state,
        current: action.articlePage,
      };
    case ARTICLE_PAGE_LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case ARTICLE_PAGE_LOADING_END:
      return {
        ...state,
        loading: false,
      };
    case ARTICLE_PAGE_LOADING_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.message,
      };
    case ARTICLE_PAGE_SHOW_DELETE_MODAL_WINDOW:
      return {
        ...state,
        deleteModalWindowIsShowed: true,
      };
    case ARTICLE_PAGE_HIDE_DELETE_MODAL_WINDOW:
      return {
        ...state,
        deleteModalWindowIsShowed: false,
      };
    default:
      return state;
  }
};

export default articlePage;
