import React from 'react';
import Article from './components/article';

const selectors = {
  articleArray: ({ articles }) => articles.map((el) => <Article key={el.slug} data={el} />),
  totalPages: ({ articlesCount }) => articlesCount / 5 + (articlesCount % 5 ? 1 : 0),
};

export default selectors;
