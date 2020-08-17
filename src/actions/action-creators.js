import {
  CHANGED_TAGS_INFO_ON_CREATE_ARTICLE_PAGE,
  CHANGED_MAX_TAG_INDEX_ON_CREATE_ARTICLE_PAGE,
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

const actionCreators = {
  changedTagsInfoOnCreateArticlePage,
  changedMaxTagIndexOnCreateArticlePage,
};

export default actionCreators;
