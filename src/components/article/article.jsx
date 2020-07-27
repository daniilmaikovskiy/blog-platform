import React from 'react';
import { enUS } from 'date-fns/locale';
import { formatWithOptions } from 'date-fns/fp';
import { wrapper, main, authorBlock, author, date } from './article.module.scss';

const formatDate = (dateObj) => formatWithOptions({ locale: enUS }, 'MMMM d, yyyy')(dateObj);

const Article = () => {
  return (
    <article className={wrapper}>
      <section className={main} />
      <section className={authorBlock}>
        <span className={author}>John Doe</span>
        <span className={date}>{formatDate(new Date())}</span>
      </section>
    </article>
  );
};

export default Article;
