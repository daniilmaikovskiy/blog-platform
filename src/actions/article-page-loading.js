import {
  ARTICLE_PAGE_LOADING_ERROR,
  ARTICLE_PAGE_LOADING_START,
  ARTICLE_PAGE_LOADING_END,
} from './action-types';
import {
  articlePageHideDeleteModalWindow,
  articlePageIsChanged,
  creatingArticleDefaultState,
  editingArticleDefaultState,
} from './action-creators';

const articlePageLoadingError = (message) => {
  return {
    type: ARTICLE_PAGE_LOADING_ERROR,
    message,
  };
};

const articlePageLoadingStart = () => {
  return {
    type: ARTICLE_PAGE_LOADING_START,
  };
};

const articlePageLoadingEnd = () => {
  return {
    type: ARTICLE_PAGE_LOADING_END,
  };
};

const articlePageLoading = (realworldService, slug) => {
  return (dispatch, getState) => {
    dispatch(articlePageHideDeleteModalWindow());
    dispatch(creatingArticleDefaultState());
    dispatch(editingArticleDefaultState());

    const {
      articles: { data: articles },
      articlePage: { current },
    } = getState();
    const targetArticleIndex = articles.findIndex((el) => el.slug === slug);

    if (current !== null && current.slug === slug) {
      return;
    }

    if (targetArticleIndex !== -1) {
      dispatch(articlePageIsChanged(articles[targetArticleIndex]));
      return;
    }

    dispatch(articlePageLoadingStart());

    realworldService
      .getSingleArticle(slug)
      .then(({ article }) => dispatch(articlePageIsChanged(article)))
      .catch((error) => dispatch(articlePageLoadingError(error.message)))
      .finally(() => dispatch(articlePageLoadingEnd()));
  };
};

export default articlePageLoading;
