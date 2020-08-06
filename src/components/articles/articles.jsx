import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { wrapper } from './articles.module.scss';
import RealworldServiceContext from '../realworld-service-context';
import actions from '../../actions';
import selectors from '../../selectors';
import PageController from '../page-controller';
import ErrorAlert from '../error-alert';
import Spinner from '../spinner';

const Articles = () => {
  const dispatch = useDispatch();
  const realworldService = useContext(RealworldServiceContext);

  useEffect(() => {
    dispatch(actions.articlesLoading(realworldService));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const articleArray = useSelector(selectors.articleArray);
  const totalPages = useSelector(selectors.totalPages);
  const currentPage = useSelector(({ page }) => page);
  const error = useSelector(({ articlesLoadingError }) => articlesLoadingError);
  const errorMessage = useSelector(
    ({ articlesLoadingErrorMessage }) => articlesLoadingErrorMessage
  );
  const loading = useSelector(({ articlesOnLoading }) => articlesOnLoading);

  if (error) {
    return <ErrorAlert description={errorMessage} />;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className={wrapper}>{articleArray}</div>
      <PageController
        total={totalPages}
        onChange={(page) => {
          dispatch(actions.pageChanging(realworldService, page));
        }}
        current={currentPage}
      />
    </>
  );
};

export default Articles;
