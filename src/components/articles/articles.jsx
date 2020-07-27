import React from 'react';
import { wrapper } from './articles.module.scss';
import Article from '../article';

const Articles = () => {
  return (
    <div className={wrapper}>
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  );
};

export default Articles;
