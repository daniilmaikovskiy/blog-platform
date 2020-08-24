import {
  changedTagsInfoOnEditArticlePage,
  changedMaxTagIndexOnEditArticlePage,
} from './action-creators';

const initEditArticlePage = () => {
  return (dispatch, getState) => {
    const { currentArticlePage } = getState();

    if (currentArticlePage === null) {
      return;
    }

    const { tagList } = getState().currentArticlePage;

    const maxTagIndex = tagList.length !== 0 ? tagList.length : 1;

    dispatch(changedMaxTagIndexOnEditArticlePage(maxTagIndex));

    const tagsMap = tagList.reduce((acc, el, i) => acc.set(i, el), new Map());
    let tagsInfo = Array.from(tagsMap.entries());

    if (tagsInfo.length === 0) {
      tagsInfo = [[0, '']];
    }

    dispatch(changedTagsInfoOnEditArticlePage(tagsInfo));
  };
};

export default initEditArticlePage;
