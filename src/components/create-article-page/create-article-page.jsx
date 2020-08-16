import React from 'react';
import classes from './create-article-page.module.scss';
import ArticleForm from '../article-form';

const CreateArticlePage = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Create new article</h2>
      <ArticleForm onSubmit={onSubmit} />
    </div>
  );
};

export default CreateArticlePage;
