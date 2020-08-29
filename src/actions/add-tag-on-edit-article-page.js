import {
  changedTagsInfoOnEditArticlePage,
  changedMaxTagIndexOnEditArticlePage,
} from './action-creators';

const addTagOnEditArticlePage = () => {
  return (dispatch, getState) => {
    const { tagsInfo, maxTagIndex } = getState().editArticlePage;
    const newTagsInfo = new Map(tagsInfo);

    newTagsInfo.set(maxTagIndex, '');

    dispatch(changedTagsInfoOnEditArticlePage(Array.from(newTagsInfo.entries())));
    dispatch(changedMaxTagIndexOnEditArticlePage(maxTagIndex + 1));
  };
};

export default addTagOnEditArticlePage;
