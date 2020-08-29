import {
  CHANGED_TAGS_INFO_ON_EDIT_ARTICLE_PAGE,
  CHANGED_MAX_TAG_INDEX_ON_EDIT_ARTICLE_PAGE,
} from '../actions/action-types';

const initialState = {
  tagsInfo: [[0, '']],
  maxTagIndex: 1,
};

const editArticlePage = (state = initialState, action) => {
  switch (action.type) {
    case CHANGED_TAGS_INFO_ON_EDIT_ARTICLE_PAGE:
      return { ...state, tagsInfo: action.tagsInfo };
    case CHANGED_MAX_TAG_INDEX_ON_EDIT_ARTICLE_PAGE:
      return { ...state, maxTagIndex: action.maxTagIndex };
    default:
      return state;
  }
};

export default editArticlePage;
