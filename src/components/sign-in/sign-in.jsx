import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import classes from './sign-in.module.scss';
import TextInput from '../text-input';
import { ROOT } from '../../global-settings';

const SignIn = () => {
  return (
    <form className={classes.wrapper}>
      <h2 className={classes.title}>Sign In</h2>
      <TextInput
        className={classes.textInput}
        signature="Email address"
        placeholder="Email address"
      />
      <TextInput className={classes.textInput} signature="Password" placeholder="Password" />
      <Button className={classes.btn} type="primary">
        Login
      </Button>
      <span className={classes.signUpLink}>
        Don&apos;t have an account? <Link to={`${ROOT}/sign-up`}>Sign Up.</Link>
      </span>
    </form>
  );
};

export default SignIn;
