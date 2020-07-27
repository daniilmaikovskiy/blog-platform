import React from 'react';
import { wrapper, main, author } from './article.module.scss';

const Article = () => {
  const date = new Date();

  return (
    <article className={wrapper}>
      <section className={main} />
      <section className={author}>
        <span>John Doe</span>
        <span>{date.toDateString()}</span>
      </section>
    </article>
  );
};

export default Article;
