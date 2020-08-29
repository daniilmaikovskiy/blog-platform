import { combineReducers } from 'redux';
import articles from './articles';
import deletingArticle from './deleting-article';
import editingArticle from './editing-article';
import creatingArticle from './creating-article';
import usersAuthentication from './users-authentication';
import usersRegistration from './users-registration';
import usersEditing from './users-editing';
import articlePage from './article-page';
import createArticlePage from './create-article-page';
import editArticlePage from './edit-article-page';
import isLogged from './is-logged';

export default combineReducers({
  articles,
  articlePage,
  deletingArticle,
  editingArticle,
  creatingArticle,
  usersAuthentication,
  usersRegistration,
  usersEditing,
  createArticlePage,
  editArticlePage,
  isLogged,
});
