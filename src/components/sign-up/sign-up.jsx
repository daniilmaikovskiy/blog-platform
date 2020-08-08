import React from 'react';
import { Checkbox, Button } from 'antd';
import { Link } from 'react-router-dom';
import classes from './sign-up.module.scss';
import TextInput from '../text-input';
import { ROOT } from '../../global-settings';

const SignUp = () => {
  return (
    <form className={classes.wrapper}>
      <h2 className={classes.title}>Create new account</h2>
      <TextInput className={classes.textInput} signature="Username" placeholder="Username" />
      <TextInput
        className={classes.textInput}
        signature="Email address"
        placeholder="Email address"
      />
      <TextInput className={classes.textInput} signature="Password" placeholder="Password" />
      <TextInput className={classes.textInput} signature="Repeat password" placeholder="Password" />
      <label className={classes.checkbox} htmlFor="i-agree">
        <Checkbox defaultChecked name="i-agree" />
        <span className={classes.checkboxText} id="i-agree">
          I agree to the processing of my personal information
        </span>
      </label>
      <Button type="primary">Create</Button>
      <span className={classes.signInLink}>
        Already have an account? <Link to={`${ROOT}/sign-in`}>Sign In.</Link>
      </span>
    </form>
  );
};

export default SignUp;
