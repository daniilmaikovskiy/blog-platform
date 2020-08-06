import {
  ARTICLES_IS_RECEIVED,
  ARTICLE_PAGE_IS_RECEIVED,
  PAGE_IS_CHANGED,
  ARTICLES_LOADING_ERROR,
  ARTICLES_LOADING_START,
  ARTICLES_LOADING_END,
  ARTICLE_PAGE_LOADING_ERROR,
  ARTICLE_PAGE_LOADING_START,
  ARTICLE_PAGE_LOADING_END,
} from '../actions/action-types';

const reducer = (
  state = {
    page: 1,
    articlesCount: 0,
    articles: [],
    articlesOnLoading: false,
    articlesLoadingError: false,
    articlesLoadingErrorMessage: '',
    articlePageOnLoading: false,
    articlePageLoadingError: false,
    articlePageLoadingErrorMessage: '',
    currentArticlePage: null,
  },
  action
) => {
  switch (action.type) {
    case ARTICLES_IS_RECEIVED:
      return { ...state, articles: action.articles, articlesCount: action.articlesCount };
    case ARTICLE_PAGE_IS_RECEIVED:
      return { ...state, currentArticlePage: action.currentArticlePage };
    case PAGE_IS_CHANGED:
      return { ...state, page: action.page };
    case ARTICLES_LOADING_START:
      return { ...state, articlesOnLoading: true };
    case ARTICLES_LOADING_END:
      return { ...state, articlesOnLoading: false };
    case ARTICLES_LOADING_ERROR:
      return { ...state, articlesLoadingError: true, articlesLoadingErrorMessage: action.message };
    case ARTICLE_PAGE_LOADING_START:
      return { ...state, articlePageOnLoading: true };
    case ARTICLE_PAGE_LOADING_END:
      return { ...state, articlePageOnLoading: false };
    case ARTICLE_PAGE_LOADING_ERROR:
      return {
        ...state,
        articlePageLoadingError: true,
        articlePageLoadingErrorMessage: action.message,
      };
    default:
      return state;
  }
};

export default reducer;
