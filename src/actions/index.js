import articlesLoading from './articles-loading';
import articlePageLoading from './article-page-loading';
import pageChanging from './page-changing';
import usersRegistration from './users-registration';
import usersAuthentication from './users-authentication';
import checkUsersAuthentication from './check-users-authentication';
import logouting from './logouting';
import usersEditing from './users-editing';
import addTagOnCreateArticlePage from './add-tag-on-create-article-page';
import deleteTagOnCreateArticlePage from './delete-tag-on-create-article-page';
import changeTagOnCreateArticlePage from './change-tag-on-create-article-page';
import creatingArticle from './creating-article';

const actions = {
  articlesLoading,
  articlePageLoading,
  pageChanging,
  usersRegistration,
  usersAuthentication,
  usersEditing,
  checkUsersAuthentication,
  logouting,
  addTagOnCreateArticlePage,
  deleteTagOnCreateArticlePage,
  changeTagOnCreateArticlePage,
  creatingArticle,
};

export default actions;
