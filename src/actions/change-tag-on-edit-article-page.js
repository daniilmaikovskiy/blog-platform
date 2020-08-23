import { changedTagsInfoOnEditArticlePage } from './action-creators';

const changeTagOnEditArticlePage = (index, changedTagsInfoFragment) => {
  return (dispatch, getState) => {
    const { editArticlePageTagsInfo: tagsInfo } = getState();
    const newTagsInfo = new Map(tagsInfo);

    newTagsInfo.set(index, changedTagsInfoFragment);

    dispatch(changedTagsInfoOnEditArticlePage(Array.from(newTagsInfo.entries())));
  };
};

export default changeTagOnEditArticlePage;
