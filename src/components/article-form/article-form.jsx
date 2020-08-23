import React from 'react';
import PropTypes from 'prop-types';
import { Button as AntdButton } from 'antd';
import { useForm } from 'react-hook-form';
import classes from './article-form.module.scss';
import TextInput from '../text-input';
import TextArea from '../text-area';
import Helper from '../../helper';
import TagFieldSet from '../tag-field-set';

const ArticleForm = ({
  onSubmit,
  addTag,
  deleteTag,
  changeTag,
  tagsInfo,
  defaultTitle,
  defaultDescription,
  defaultBody,
}) => {
  const { register, errors, handleSubmit } = useForm();

  const titleClasses = [classes.textInput];
  const descriptionClasses = [classes.textInput];
  const bodyClasses = [classes.textInput];

  if (errors.title) {
    titleClasses.push(classes.textInputError);
  }
  if (errors.description) {
    descriptionClasses.push(classes.textInputError);
  }
  if (errors.body) {
    bodyClasses.push(classes.textAreaError);
  }

  const errorMessages = Helper.getErrorMessages(errors);

  return (
    <form className={classes.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        className={titleClasses.join(' ')}
        name="title"
        type="text"
        signature="Title"
        placeholder="Title"
        defaultValue={defaultTitle}
        ref={register({ required: true })}
      />
      {errors.title && <span className={classes.errorMessage}>{errorMessages.get('title')}</span>}
      <TextInput
        className={descriptionClasses.join(' ')}
        name="description"
        type="text"
        signature="Short description"
        placeholder="Some short description that displays in atricles list"
        defaultValue={defaultDescription}
        ref={register({ required: true })}
      />
      {errors.description && (
        <span className={classes.errorMessage}>{errorMessages.get('description')}</span>
      )}
      <TextArea
        className={bodyClasses.join(' ')}
        name="body"
        signature="Text"
        placeholder="Text"
        defaultValue={defaultBody}
        ref={register({ required: true })}
      />
      {errors.body && <span className={classes.errorMessage}>{errorMessages.get('body')}</span>}
      <TagFieldSet
        className={classes.tags}
        tagsInfo={tagsInfo}
        addTag={addTag}
        deleteTag={deleteTag}
        changeTag={changeTag}
        ref={register}
      />
      <AntdButton className={classes.btn} type="primary" htmlType="submit">
        Send
      </AntdButton>
    </form>
  );
};

ArticleForm.defaultProps = {
  onSubmit: () => {},
  addTag: () => {},
  deleteTag: () => {},
  defaultTitle: '',
  defaultDescription: '',
  defaultBody: '',
};

ArticleForm.propTypes = {
  onSubmit: PropTypes.func,
  addTag: PropTypes.func,
  deleteTag: PropTypes.func,
  changeTag: PropTypes.func.isRequired,
  tagsInfo: PropTypes.objectOf(Map).isRequired,
  defaultTitle: PropTypes.string,
  defaultDescription: PropTypes.string,
  defaultBody: PropTypes.string,
};

export default ArticleForm;
