import { changedTagsInfoOnCreateArticlePage } from './action-creators';

const deleteTagOnCreateArticlePage = (index) => {
  return (dispatch, getState) => {
    const { tagsInfo } = getState().createArticlePage;
    const newTagsInfo = new Map(tagsInfo);

    newTagsInfo.delete(index);

    dispatch(changedTagsInfoOnCreateArticlePage(Array.from(newTagsInfo.entries())));
  };
};

export default deleteTagOnCreateArticlePage;
