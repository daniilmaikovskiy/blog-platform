import { changedTagsInfoOnEditArticlePage } from './action-creators';

const changeTagOnEditArticlePage = (index, changedTagsInfoFragment) => {
  return (dispatch, getState) => {
    const { tagsInfo } = getState().editArticlePage;
    const newTagsInfo = new Map(tagsInfo);

    newTagsInfo.set(index, changedTagsInfoFragment);

    dispatch(changedTagsInfoOnEditArticlePage(Array.from(newTagsInfo.entries())));
  };
};

export default changeTagOnEditArticlePage;
