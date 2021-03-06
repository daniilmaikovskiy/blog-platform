import { changedTagsInfoOnCreateArticlePage } from './action-creators';

const changeTagOnCreateArticlePage = (index, changedTagsInfoFragment) => {
  return (dispatch, getState) => {
    const { tagsInfo } = getState().createArticlePage;
    const newTagsInfo = new Map(tagsInfo);

    newTagsInfo.set(index, changedTagsInfoFragment);

    dispatch(changedTagsInfoOnCreateArticlePage(Array.from(newTagsInfo.entries())));
  };
};

export default changeTagOnCreateArticlePage;
