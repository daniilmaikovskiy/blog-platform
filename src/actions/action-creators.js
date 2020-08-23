import {
  CHANGED_TAGS_INFO_ON_CREATE_ARTICLE_PAGE,
  CHANGED_MAX_TAG_INDEX_ON_CREATE_ARTICLE_PAGE,
  CHANGED_TAGS_INFO_ON_EDIT_ARTICLE_PAGE,
  CHANGED_MAX_TAG_INDEX_ON_EDIT_ARTICLE_PAGE,
  DELETED_ARTICLE,
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

const actionCreators = {
  changedTagsInfoOnCreateArticlePage,
  changedMaxTagIndexOnCreateArticlePage,
  changedTagsInfoOnEditArticlePage,
  changedMaxTagIndexOnEditArticlePage,
  deletedArticle,
};

export default actionCreators;
