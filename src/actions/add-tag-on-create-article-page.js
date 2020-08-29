import {
  changedTagsInfoOnCreateArticlePage,
  changedMaxTagIndexOnCreateArticlePage,
} from './action-creators';

const addTagOnCreateArticlePage = () => {
  return (dispatch, getState) => {
    const { tagsInfo, maxTagIndex } = getState().createArticlePage;
    const newTagsInfo = new Map(tagsInfo);

    newTagsInfo.set(maxTagIndex, '');

    dispatch(changedTagsInfoOnCreateArticlePage(Array.from(newTagsInfo.entries())));
    dispatch(changedMaxTagIndexOnCreateArticlePage(maxTagIndex + 1));
  };
};

export default addTagOnCreateArticlePage;
