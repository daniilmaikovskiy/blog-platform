import React from 'react';
import classes from './create-article-page.module.scss';
import ArticleForm from '../article-form';

const CreateArticlePage = () => {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Create new article</h2>
      <ArticleForm />
    </div>
  );
};

export default CreateArticlePage;
