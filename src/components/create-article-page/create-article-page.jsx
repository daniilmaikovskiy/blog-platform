import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './create-article-page.module.scss';
import ArticleForm from '../article-form';
import selectors from '../../selectors';
import actions from '../../actions';

const CreateArticlePage = () => {
  const dispatch = useDispatch();

  const tagsInfo = useSelector(selectors.createArticlePageTagsInfo);
  const addTag = () => dispatch(actions.addTagOnCreateArticlePage());
  const deleteTag = (key) => dispatch(actions.deleteTagOnCreateArticlePage(key));
  const changeTag = (key, value) => dispatch(actions.changeTagOnCreateArticlePage(key, value));

  const onSubmit = (data) => {
    console.log('Title: ', data.title);
    console.log('Description: ', data.description);
    console.log('Body: ', data.body);

    const tagList = Array.from(tagsInfo.keys()).map((key) => tagsInfo.get(key));

    console.log('Tag List: ', tagList);
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
    </div>
  );
};

export default CreateArticlePage;
