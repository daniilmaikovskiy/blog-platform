import { ARTICLES_IS_RECEIVED } from './action-types';

const articlesIsReceived = (articlesCount, articles) => {
  return {
    type: ARTICLES_IS_RECEIVED,
    articlesCount,
    articles,
  };
};

const articlesLoading = (realworldService) => {
  return (dispatch) =>
    realworldService
      .getArticles()
      .then(({ articlesCount, articles }) => dispatch(articlesIsReceived(articlesCount, articles)));
};

export default articlesLoading;
