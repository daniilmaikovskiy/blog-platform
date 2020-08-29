import {
  ARTICLES_IS_CHANGED,
  ARTICLES_COUNT_IS_CHANGED,
  PAGE_IS_CHANGED,
  ARTICLES_LOADING_ERROR,
  ARTICLES_LOADING_START,
  ARTICLES_LOADING_END,
} from '../actions/action-types';

const initialState = {
  page: 1,
  count: 0,
  data: [],
  loading: false,
  error: false,
  errorMessage: '',
};

const articles = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLES_IS_CHANGED:
      return {
        ...state,
        data: action.articles,
      };
    case ARTICLES_COUNT_IS_CHANGED:
      return {
        ...state,
        count: action.articlesCount,
      };
    case PAGE_IS_CHANGED:
      return {
        ...state,
        page: action.page,
      };
    case ARTICLES_LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case ARTICLES_LOADING_END:
      return {
        ...state,
        loading: false,
      };
    case ARTICLES_LOADING_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.message,
      };
    default:
      return state;
  }
};

export default articles;
