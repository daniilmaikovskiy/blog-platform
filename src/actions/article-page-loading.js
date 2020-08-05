import { ARTICLE_PAGE_IS_RECEIVED } from './action-types';

const articlePageIsReceived = (currentArticlePage) => {
  return {
    type: ARTICLE_PAGE_IS_RECEIVED,
    currentArticlePage,
  };
};

const articlePageLoading = (realworldService, slug) => {
  return (dispatch) =>
    realworldService
      .getSingleArticle(slug)
      .then(({ article }) => dispatch(articlePageIsReceived(article)));
};

export default articlePageLoading;
