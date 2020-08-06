import {
  ARTICLES_IS_RECEIVED,
  ARTICLE_PAGE_IS_RECEIVED,
  PAGE_IS_CHANGED,
} from '../actions/action-types';

const reducer = (
  state = {
    page: 1,
    articlesCount: 0,
    articles: [],
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
    default:
      return state;
  }
};

export default reducer;
