import { changedTagsInfoOnEditArticlePage } from './action-creators';

const deleteTagOnEditArticlePage = (index) => {
  return (dispatch, getState) => {
    const { editArticlePageTagsInfo: tagsInfo } = getState();
    const newTagsInfo = new Map(tagsInfo);

    newTagsInfo.delete(index);

    dispatch(changedTagsInfoOnEditArticlePage(Array.from(newTagsInfo.entries())));
  };
};

export default deleteTagOnEditArticlePage;
