import React from 'react';
import Article from './components/article';

const selectors = {
  articleArray: ({ articles }) => articles.map((el) => <Article key={el.slug} data={el} />),
};

export default selectors;
