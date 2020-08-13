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
  USERS_REGISTRATION_SUCCESS,
  USERS_AUTHENTICATION_LOADING_ERROR,
  USERS_AUTHENTICATION_LOADING_START,
  USERS_AUTHENTICATION_LOADING_END,
  USERS_AUTHENTICATION_ERRORS,
  USERS_AUTHENTICATION_SUCCESS,
  USER_IS_LOGGED,
  LOGOUT,
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
    usersAuthenticationLoading: false,
    usersAuthenticationLoadingError: false,
    usersAuthenticationErrorMessage: '',
    usersAuthenticationErrors: {},
    isLogged: false,
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
    case USERS_REGISTRATION_SUCCESS:
      return { ...state, isLogged: true };
    case USERS_AUTHENTICATION_LOADING_ERROR:
      return {
        ...state,
        usersAuthenticationLoadingError: true,
        usersAuthenticationErrorMessage: action.message,
      };
    case USERS_AUTHENTICATION_LOADING_START:
      return { ...state, usersAuthenticationLoading: true };
    case USERS_AUTHENTICATION_LOADING_END:
      return { ...state, usersAuthenticationLoading: false };
    case USERS_AUTHENTICATION_ERRORS:
      return { ...state, usersAuthenticationErrors: action.errors };
    case USERS_AUTHENTICATION_SUCCESS:
      return { ...state, isLogged: true };
    case USER_IS_LOGGED:
      return { ...state, isLogged: true };
    case LOGOUT:
      return { ...state, isLogged: false };
    default:
      return state;
  }
};

export default reducer;
