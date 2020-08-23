import {
  changedTagsInfoOnEditArticlePage,
  changedMaxTagIndexOnEditArticlePage,
} from './action-creators';

const addTagOnEditArticlePage = () => {
  return (dispatch, getState) => {
    const { editArticlePageTagsInfo: tagsInfo, editArticlePageMaxTagIndex: maxIndex } = getState();
    const newTagsInfo = new Map(tagsInfo);

    newTagsInfo.set(maxIndex, '');

    dispatch(changedTagsInfoOnEditArticlePage(Array.from(newTagsInfo.entries())));
    dispatch(changedMaxTagIndexOnEditArticlePage(maxIndex + 1));
  };
};

export default addTagOnEditArticlePage;
