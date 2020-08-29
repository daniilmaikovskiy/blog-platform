import React from 'react';
import Article from './components/article';
import { NUMBER_OF_ARTICLES_ON_PAGE as ARTICLES_ON_PAGE } from './global-settings';

const selectors = {
  articleArray: ({ articles: { data }, isLogged }) =>
    data.map((el) => <Article key={el.slug} data={el} isLogged={isLogged} />),

  totalPages: ({ articles: { count } }) => Math.ceil(count / ARTICLES_ON_PAGE),

  page: ({ articles: { page } }) => page,
  articlesLoadingError: ({ articles: { error } }) => error,
  articlesLoadingErrorMessage: ({ articles: { errorMessage } }) => errorMessage,
  articlesOnLoading: ({ articles: { loading } }) => loading,

  isLogged: ({ isLogged }) => isLogged,

  createArticlePageTagsInfo: ({ createArticlePage: { tagsInfo } }) => new Map(tagsInfo),

  editArticlePageTagsInfo: ({ editArticlePage: { tagsInfo } }) => new Map(tagsInfo),

  currentArticlePage: ({ articlePage: { current } }) => current,
  articlePageLoadingError: ({ articlePage: { error } }) => error,
  articlePageLoadingErrorMessage: ({ articlePage: { errorMessage } }) => errorMessage,
  articlePageOnLoading: ({ articlePage: { loading } }) => loading,
  articlePageDeleteModalWindowIsShowed: ({ articlePage: { deleteModalWindowIsShowed } }) =>
    deleteModalWindowIsShowed,

  usersRegistrationLoadingError: ({ usersRegistration: { error } }) => error,
  usersRegistrationErrorMessage: ({ usersRegistration: { errorMessage } }) => errorMessage,
  usersRegistrationLoading: ({ usersRegistration: { loading } }) => loading,
  usersRegistrationErrors: ({ usersRegistration: { errors } }) => errors,

  usersAuthenticationLoading: ({ usersAuthentication: { loading } }) => loading,
  usersAuthenticationLoadingError: ({ usersAuthentication: { error } }) => error,
  usersAuthenticationErrorMessage: ({ usersAuthentication: { errorMessage } }) => errorMessage,
  usersAuthenticationErrors: ({ usersAuthentication: { errors } }) => errors,

  usersEditingLoading: ({ usersEditing: { loading } }) => loading,
  usersEditingLoadingError: ({ usersEditing: { error } }) => error,
  usersEditingErrorMessage: ({ usersEditing: { errorMessage } }) => errorMessage,
  usersEditingErrors: ({ usersEditing: { errors } }) => errors,
  usersEditingSuccessObj: ({ usersEditing: { successObj } }) => successObj,

  creatingArticleLoading: ({ creatingArticle: { loading } }) => loading,
  creatingArticleLoadingError: ({ creatingArticle: { error } }) => error,
  creatingArticleErrorMessage: ({ creatingArticle: { errorMessage } }) => errorMessage,
  creatingArticleSuccess: ({ creatingArticle: { success } }) => success,

  deletingArticleLoading: ({ deletingArticle: { loading } }) => loading,
  deletingArticleLoadingError: ({ deletingArticle: { error } }) => error,
  deletingArticleErrorMessage: ({ deletingArticle: { errorMessage } }) => errorMessage,

  editingArticleLoading: ({ editingArticle: { loading } }) => loading,
  editingArticleLoadingError: ({ editingArticle: { error } }) => error,
  editingArticleErrorMessage: ({ editingArticle: { errorMessage } }) => errorMessage,
  editingArticleSuccess: ({ editingArticle: { success } }) => success,
};

export default selectors;
