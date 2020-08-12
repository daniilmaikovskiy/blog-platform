import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import classes from './sign-in.module.scss';
import TextInput from '../text-input';
import { ROOT, EMAIL_RULES, PASSWORD_RULES } from '../../global-settings';
import Helper from '../../helper';

const SignIn = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSibmit = () => {};

  const emailClasses = [classes.textInput];
  const passwordClasses = [classes.textInput];

  if (errors.email) {
    emailClasses.push(classes.textInputError);
  }
  if (errors.password) {
    passwordClasses.push(classes.textInputError);
  }

  const errorMessages = Helper.getErrorMessages(errors);

  return (
    <form className={classes.wrapper} onSubmit={handleSubmit(onSibmit)}>
      <h2 className={classes.title}>Sign In</h2>
      <TextInput
        className={emailClasses.join(' ')}
        name="email"
        type="email"
        signature="Email address"
        placeholder="Email address"
        ref={register(EMAIL_RULES)}
      />
      {errors.email && <span className={classes.errorMessage}>{errorMessages.get('email')}</span>}
      <TextInput
        className={passwordClasses.join(' ')}
        name="password"
        type="password"
        signature="Password"
        placeholder="Password"
        ref={register(PASSWORD_RULES)}
      />
      {errors.password && (
        <span className={classes.errorMessage}>{errorMessages.get('password')}</span>
      )}
      <Button className={classes.btn} type="primary" htmlType="submit">
        Login
      </Button>
      <span className={classes.signUpLink}>
        Don&apos;t have an account? <Link to={`${ROOT}/sign-up`}>Sign Up.</Link>
      </span>
    </form>
  );
};

export default SignIn;
