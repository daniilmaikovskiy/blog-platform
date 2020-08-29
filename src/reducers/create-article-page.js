import {
  CHANGED_TAGS_INFO_ON_CREATE_ARTICLE_PAGE,
  CHANGED_MAX_TAG_INDEX_ON_CREATE_ARTICLE_PAGE,
} from '../actions/action-types';

const initialState = {
  tagsInfo: [[0, '']],
  maxTagIndex: 1,
};

const createArticlePage = (state = initialState, action) => {
  switch (action.type) {
    case CHANGED_TAGS_INFO_ON_CREATE_ARTICLE_PAGE:
      return { ...state, tagsInfo: action.tagsInfo };
    case CHANGED_MAX_TAG_INDEX_ON_CREATE_ARTICLE_PAGE:
      return { ...state, maxTagIndex: action.maxTagIndex };
    default:
      return state;
  }
};

export default createArticlePage;
