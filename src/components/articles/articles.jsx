import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { wrapper } from './articles.module.scss';
import ArticleItem from '../article-item';
import RealworldServiceContext from '../realworld-service-context';
import actions from '../../actions';

const Articles = () => {
  const dispatch = useDispatch();
  const realworldService = useContext(RealworldServiceContext);

  useEffect(() => {
    dispatch(actions.articlesLoading(realworldService));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={wrapper}>
      <ArticleItem id="1" />
      <ArticleItem id="2" />
      <ArticleItem id="3" />
      <ArticleItem id="4" />
      <ArticleItem id="5" />
    </div>
  );
};

export default Articles;
