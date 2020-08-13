import React from 'react';
import Article from './components/article';
import { NUMBER_OF_ARTICLES_ON_PAGE } from './global-settings';

const selectors = {
  articleArray: ({ articles }) => articles.map((el) => <Article key={el.slug} data={el} />),
  totalPages: ({ articlesCount }) =>
    articlesCount / NUMBER_OF_ARTICLES_ON_PAGE +
    (articlesCount % NUMBER_OF_ARTICLES_ON_PAGE ? 1 : 0),
  page: ({ page }) => page,
  usersRegistrationLoadingError: ({ usersRegistrationLoadingError }) =>
    usersRegistrationLoadingError,
  usersRegistrationErrorMessage: ({ usersRegistrationErrorMessage }) =>
    usersRegistrationErrorMessage,
  usersRegistrationLoading: ({ usersRegistrationLoading }) => usersRegistrationLoading,
  usersRegistrationErrors: ({ usersRegistrationErrors }) => usersRegistrationErrors,
  articlesLoadingError: ({ articlesLoadingError }) => articlesLoadingError,
  articlesLoadingErrorMessage: ({ articlesLoadingErrorMessage }) => articlesLoadingErrorMessage,
  articlesOnLoading: ({ articlesOnLoading }) => articlesOnLoading,
  currentArticlePage: ({ currentArticlePage }) => currentArticlePage,
  articlePageLoadingError: ({ articlePageLoadingError }) => articlePageLoadingError,
  articlePageLoadingErrorMessage: ({ articlePageLoadingErrorMessage }) =>
    articlePageLoadingErrorMessage,
  articlePageOnLoading: ({ articlePageOnLoading }) => articlePageOnLoading,
};

export default selectors;
