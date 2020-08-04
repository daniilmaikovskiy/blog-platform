import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { wrapper } from './articles.module.scss';
import RealworldServiceContext from '../realworld-service-context';
import actions from '../../actions';
import selectors from '../../selectors';

const Articles = () => {
  const dispatch = useDispatch();
  const realworldService = useContext(RealworldServiceContext);

  useEffect(() => {
    dispatch(actions.articlesLoading(realworldService));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const articleArray = useSelector(selectors.articleArray);

  return <div className={wrapper}>{articleArray}</div>;
};

export default Articles;
