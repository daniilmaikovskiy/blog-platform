import React from 'react';
import PropTypes from 'prop-types';
import { Button as AntdButton } from 'antd';
import { useForm } from 'react-hook-form';
import classes from './article-form.module.scss';
import TextInput from '../text-input';
import TextArea from '../text-area';
import Helper from '../../helper';
import TagField from '../tag-field';

const ArticleForm = ({ onSubmit }) => {
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
        ref={register({ required: true })}
      />
      {errors.title && <span className={classes.errorMessage}>{errorMessages.get('title')}</span>}
      <TextInput
        className={descriptionClasses.join(' ')}
        name="description"
        type="text"
        signature="Short description"
        placeholder="Some short description that displays in atricles list"
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
        ref={register({ required: true })}
      />
      {errors.body && <span className={classes.errorMessage}>{errorMessages.get('body')}</span>}
      <div className={classes.tags}>
        <TagField className={classes.tag} name="tag[0]" signature="Tags" ref={register} />
        <TagField className={classes.tag} name="tag[1]" isLast ref={register} />
      </div>
      <AntdButton className={classes.btn} type="primary" htmlType="submit">
        Send
      </AntdButton>
    </form>
  );
};

ArticleForm.defaultProps = {
  onSubmit: () => {},
};

ArticleForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ArticleForm;
