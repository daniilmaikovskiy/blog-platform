import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import classes from './create-article-page.module.scss';
import ArticleForm from '../article-form';
import selectors from '../../selectors';
import actions from '../../actions';
import ErrorAlert from '../error-alert';
import Spinner from '../spinner';
import RealworldServiceContext from '../realworld-service-context';
import { ROOT } from '../../global-settings';

const CreateArticlePage = () => {
  const dispatch = useDispatch();
  const realworldService = useContext(RealworldServiceContext);

  const tagsInfo = useSelector(selectors.createArticlePageTagsInfo);
  const addTag = () => dispatch(actions.addTagOnCreateArticlePage());
  const deleteTag = (key) => dispatch(actions.deleteTagOnCreateArticlePage(key));
  const changeTag = (key, value) => dispatch(actions.changeTagOnCreateArticlePage(key, value));

  const error = useSelector(selectors.creatingArticleLoadingError);
  const errorMessage = useSelector(selectors.creatingArticleErrorMessage);
  const loading = useSelector(selectors.creatingArticleLoading);
  const success = useSelector(selectors.creatingArticleSuccess);
  const isLogged = useSelector(selectors.isLogged);

  if (!isLogged) {
    return <Redirect to={`${ROOT}/`} />;
  }

  if (error) {
    return <ErrorAlert description={errorMessage} />;
  }

  if (loading) {
    return <Spinner />;
  }

  const onSubmit = ({ title, body, description }) => {
    const tagList = Array.from(tagsInfo.keys()).map((key) => tagsInfo.get(key));

    dispatch(actions.creatingArticle(realworldService, { title, description, body, tagList }));
  };

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Create new article</h2>
      <ArticleForm
        tagsInfo={tagsInfo}
        addTag={addTag}
        deleteTag={deleteTag}
        changeTag={changeTag}
        onSubmit={onSubmit}
      />
      {success && <h3 className={classes.success}>Article created</h3>}
    </div>
  );
};

export default CreateArticlePage;
