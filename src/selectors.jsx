import React from 'react';
import Article from './components/article';
import { NUMBER_OF_ARTICLES_ON_PAGE } from './global-settings';

const selectors = {
  articleArray: ({ articles }) => articles.map((el) => <Article key={el.slug} data={el} />),
  totalPages: ({ articlesCount }) =>
    articlesCount / NUMBER_OF_ARTICLES_ON_PAGE +
    (articlesCount % NUMBER_OF_ARTICLES_ON_PAGE ? 1 : 0),
};

export default selectors;
