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
  ARTICLE_PAGE_SHOW_DELETE_MODAL_WINDOW,
  ARTICLE_PAGE_HIDE_DELETE_MODAL_WINDOW,
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
  USERS_EDITING_LOADING_ERROR,
  USERS_EDITING_LOADING_START,
  USERS_EDITING_LOADING_END,
  USERS_EDITING_ERRORS,
  USERS_EDITING_SUCCESS,
  CHANGED_TAGS_INFO_ON_CREATE_ARTICLE_PAGE,
  CHANGED_MAX_TAG_INDEX_ON_CREATE_ARTICLE_PAGE,
  CREATING_ARTICLE_LOADING_ERROR,
  CREATING_ARTICLE_LOADING_START,
  CREATING_ARTICLE_LOADING_END,
  CREATING_ARTICLE_SUCCESS,
  DELETING_ARTICLE_LOADING_ERROR,
  DELETING_ARTICLE_LOADING_START,
  DELETING_ARTICLE_LOADING_END,
  DELETED_ARTICLE,
  EDITING_ARTICLE_LOADING_ERROR,
  EDITING_ARTICLE_LOADING_START,
  EDITING_ARTICLE_LOADING_END,
  EDITING_ARTICLE_SUCCESS,
  CHANGED_TAGS_INFO_ON_EDIT_ARTICLE_PAGE,
  CHANGED_MAX_TAG_INDEX_ON_EDIT_ARTICLE_PAGE,
  ARTICLE_LIKED,
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
    articlePageDeleteModalWindowIsShowed: false,
    currentArticlePage: null,
    usersRegistrationLoading: false,
    usersRegistrationLoadingError: false,
    usersRegistrationErrorMessage: '',
    usersRegistrationErrors: {},
    usersAuthenticationLoading: false,
    usersAuthenticationLoadingError: false,
    usersAuthenticationErrorMessage: '',
    usersAuthenticationErrors: {},
    usersEditingLoading: false,
    usersEditingLoadingError: false,
    usersEditingErrorMessage: '',
    usersEditingErrors: {},
    usersEditingSuccessObj: {},
    creatingArticleLoading: false,
    creatingArticleLoadingError: false,
    creatingArticleErrorMessage: '',
    creatingArticleSuccess: false,
    isLogged: false,
    createArticlePageTagsInfo: [[0, '']],
    createArticlePageMaxTagIndex: 1,
    deletingArticleLoading: false,
    deletingArticleLoadingError: false,
    deletingArticleErrorMessage: '',
    editingArticleLoading: false,
    editingArticleLoadingError: false,
    editingArticleErrorMessage: '',
    editingArticleSuccess: false,
    editArticlePageTagsInfo: [[0, '']],
    editArticlePageMaxTagIndex: 1,
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
    case USERS_EDITING_LOADING_ERROR:
      return {
        ...state,
        usersEditingLoadingError: true,
        usersEditingErrorMessage: action.message,
      };
    case USERS_EDITING_LOADING_START:
      return { ...state, usersEditingLoading: true };
    case USERS_EDITING_LOADING_END:
      return { ...state, usersEditingLoading: false };
    case USERS_EDITING_ERRORS:
      return { ...state, usersEditingErrors: action.errors };
    case USERS_EDITING_SUCCESS:
      return { ...state, usersEditingSuccessObj: {} };
    case CHANGED_TAGS_INFO_ON_CREATE_ARTICLE_PAGE:
      return { ...state, createArticlePageTagsInfo: action.tagsInfo };
    case CHANGED_MAX_TAG_INDEX_ON_CREATE_ARTICLE_PAGE:
      return { ...state, createArticlePageMaxTagIndex: action.maxTagIndex };
    case CREATING_ARTICLE_LOADING_ERROR:
      return {
        ...state,
        creatingArticleLoadingError: true,
        creatingArticleErrorMessage: action.message,
      };
    case CREATING_ARTICLE_LOADING_START:
      return { ...state, creatingArticleLoading: true };
    case CREATING_ARTICLE_LOADING_END:
      return { ...state, creatingArticleLoading: false };
    case CREATING_ARTICLE_SUCCESS:
      return { ...state, creatingArticleSuccess: true };
    case DELETING_ARTICLE_LOADING_ERROR:
      return {
        ...state,
        LoadingError: true,
        ErrorMessage: action.message,
      };
    case DELETING_ARTICLE_LOADING_START:
      return { ...state, Loading: true };
    case DELETING_ARTICLE_LOADING_END:
      return { ...state, Loading: false };
    case DELETED_ARTICLE:
      return {
        ...state,
        deletingArticleLoading: false,
        deletingArticleLoadingError: false,
        deletingArticleErrorMessage: '',
        deletingArticleSuccess: false,
      };
    case EDITING_ARTICLE_LOADING_ERROR:
      return {
        ...state,
        editingArticleLoadingError: true,
        editingArticleErrorMessage: action.message,
      };
    case EDITING_ARTICLE_LOADING_START:
      return { ...state, editingArticleLoading: true };
    case EDITING_ARTICLE_LOADING_END:
      return { ...state, editingArticleLoading: false };
    case EDITING_ARTICLE_SUCCESS:
      return { ...state, editingArticleSuccess: true };
    case CHANGED_TAGS_INFO_ON_EDIT_ARTICLE_PAGE:
      return { ...state, editArticlePageTagsInfo: action.tagsInfo };
    case CHANGED_MAX_TAG_INDEX_ON_EDIT_ARTICLE_PAGE:
      return { ...state, editArticlePageMaxTagIndex: action.maxTagIndex };
    case ARTICLE_PAGE_SHOW_DELETE_MODAL_WINDOW:
      return { ...state, articlePageDeleteModalWindowIsShowed: true };
    case ARTICLE_PAGE_HIDE_DELETE_MODAL_WINDOW:
      return { ...state, articlePageDeleteModalWindowIsShowed: false };
    case ARTICLE_LIKED:
      return { ...state, articles: action.articles, currentArticlePage: action.currentArticlePage };
    default:
      return state;
  }
};

export default reducer;
