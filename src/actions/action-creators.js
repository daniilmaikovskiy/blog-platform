import {
  CHANGED_TAGS_INFO_ON_CREATE_ARTICLE_PAGE,
  CHANGED_MAX_TAG_INDEX_ON_CREATE_ARTICLE_PAGE,
  CHANGED_TAGS_INFO_ON_EDIT_ARTICLE_PAGE,
  CHANGED_MAX_TAG_INDEX_ON_EDIT_ARTICLE_PAGE,
  ARTICLES_IS_CHANGED,
  ARTICLE_PAGE_IS_CHANGED,
  ARTICLE_PAGE_SHOW_DELETE_MODAL_WINDOW,
  ARTICLE_PAGE_HIDE_DELETE_MODAL_WINDOW,
  DELETED_ARTICLE,
  USER_IS_LOGGED,
} from './action-types';

export const changedTagsInfoOnCreateArticlePage = (tagsInfo) => {
  return {
    type: CHANGED_TAGS_INFO_ON_CREATE_ARTICLE_PAGE,
    tagsInfo,
  };
};

export const changedMaxTagIndexOnCreateArticlePage = (maxTagIndex) => {
  return {
    type: CHANGED_MAX_TAG_INDEX_ON_CREATE_ARTICLE_PAGE,
    maxTagIndex,
  };
};

export const changedTagsInfoOnEditArticlePage = (tagsInfo) => {
  return {
    type: CHANGED_TAGS_INFO_ON_EDIT_ARTICLE_PAGE,
    tagsInfo,
  };
};

export const changedMaxTagIndexOnEditArticlePage = (maxTagIndex) => {
  return {
    type: CHANGED_MAX_TAG_INDEX_ON_EDIT_ARTICLE_PAGE,
    maxTagIndex,
  };
};

export const deletedArticle = () => {
  return {
    type: DELETED_ARTICLE,
  };
};

export const articlePageHideDeleteModalWindow = () => {
  return {
    type: ARTICLE_PAGE_HIDE_DELETE_MODAL_WINDOW,
  };
};

export const articlesIsChanged = (articles) => {
  return {
    type: ARTICLES_IS_CHANGED,
    articles,
  };
};

export const articlePageIsChanged = (articlePage) => {
  return {
    type: ARTICLE_PAGE_IS_CHANGED,
    articlePage,
  };
};

export const articlePageShowDeleteModalWindow = () => {
  return {
    type: ARTICLE_PAGE_SHOW_DELETE_MODAL_WINDOW,
  };
};

export const userIsLogged = () => {
  return {
    type: USER_IS_LOGGED,
  };
};

const actionCreators = {
  changedTagsInfoOnCreateArticlePage,
  changedMaxTagIndexOnCreateArticlePage,
  changedTagsInfoOnEditArticlePage,
  changedMaxTagIndexOnEditArticlePage,
  deletedArticle,
  articlePageHideDeleteModalWindow,
  articlePageShowDeleteModalWindow,
  userIsLogged,
  articlesIsChanged,
  articlePageIsChanged,
};

export default actionCreators;
