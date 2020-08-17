import {
  changedTagsInfoOnCreateArticlePage,
  changedMaxTagIndexOnCreateArticlePage,
} from './action-creators';

const addTagOnCreateArticlePage = () => {
  return (dispatch, getState) => {
    const {
      createArticlePageTagsInfo: tagsInfo,
      createArticlePageMaxTagIndex: maxIndex,
    } = getState();
    const newTagsInfo = new Map(tagsInfo);

    newTagsInfo.set(maxIndex, '');

    dispatch(changedTagsInfoOnCreateArticlePage(Array.from(newTagsInfo.entries())));
    dispatch(changedMaxTagIndexOnCreateArticlePage(maxIndex + 1));
  };
};

export default addTagOnCreateArticlePage;
