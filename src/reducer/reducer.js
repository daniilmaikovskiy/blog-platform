import {
  ARTICLES_IS_RECEIVED,
  ARTICLE_PAGE_IS_RECEIVED,
  PAGE_IS_CHANGED,
  ARTICLES_LOADING_ERROR,
  ARTICLES_LOADING_START,
  ARTICLES_LOADING_END,
  ARTICLE_PAGE_LOADING_ERROR,
  ARTICLE_PAGE_LOADING_START,
  ARTICLE_PAGE_LOADING_END,
  USERS_REGISTRATION_LOADING_ERROR,
  USERS_REGISTRATION_LOADING_START,
  USERS_REGISTRATION_LOADING_END,
  USERS_REGISTRATION_ERRORS,
} from '../actions/action-types';

const reducer = (
  state = {
    page: 1,
    articlesCount: 0,
    articles: [],
    articlesOnLoading: false,
    articlesLoadingError: false,
    articlesLoadingErrorMessage: '',
    articlePageOnLoading: false,
    articlePageLoadingError: false,
    articlePageLoadingErrorMessage: '',
    currentArticlePage: null,
    usersRegistrationLoading: false,
    usersRegistrationLoadingError: false,
    usersRegistrationErrorMessage: '',
    usersRegistrationErrors: {},
  },
  action
) => {
  switch (action.type) {
    case ARTICLES_IS_RECEIVED:
      return { ...state, articles: action.articles, articlesCount: action.articlesCount };
    case ARTICLE_PAGE_IS_RECEIVED:
      return { ...state, currentArticlePage: action.currentArticlePage };
    case PAGE_IS_CHANGED:
      return { ...state, page: action.page };
    case ARTICLES_LOADING_START:
      return { ...state, articlesOnLoading: true };
    case ARTICLES_LOADING_END:
      return { ...state, articlesOnLoading: false };
    case ARTICLES_LOADING_ERROR:
      return { ...state, articlesLoadingError: true, articlesLoadingErrorMessage: action.message };
    case ARTICLE_PAGE_LOADING_START:
      return { ...state, articlePageOnLoading: true };
    case ARTICLE_PAGE_LOADING_END:
      return { ...state, articlePageOnLoading: false };
    case ARTICLE_PAGE_LOADING_ERROR:
      return {
        ...state,
        articlePageLoadingError: true,
        articlePageLoadingErrorMessage: action.message,
      };
    case USERS_REGISTRATION_LOADING_START:
      return { ...state, usersRegistrationLoading: true };
    case USERS_REGISTRATION_LOADING_END:
      return { ...state, usersRegistrationLoading: false };
    case USERS_REGISTRATION_LOADING_ERROR:
      return {
        ...state,
        usersRegistrationLoadingError: true,
        usersRegistrationErrorMessage: action.message,
      };
    case USERS_REGISTRATION_ERRORS:
      return { ...state, usersRegistrationErrors: action.errors };
    default:
      return state;
  }
};

export default reducer;
