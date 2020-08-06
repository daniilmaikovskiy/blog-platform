import { ARTICLES_IS_RECEIVED } from './action-types';

const articlesIsReceived = (articlesCount, articles) => {
  return {
    type: ARTICLES_IS_RECEIVED,
    articlesCount,
    articles,
  };
};

const articlesLoading = (realworldService, page = 1) => {
  return (dispatch) =>
    realworldService
      .getArticles(page)
      .then(({ articlesCount, articles }) => dispatch(articlesIsReceived(articlesCount, articles)));
};

export default articlesLoading;
