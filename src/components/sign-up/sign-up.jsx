import React from 'react';
import { Checkbox, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import classes from './sign-up.module.scss';
import TextInput from '../text-input';
import { ROOT, EMAIL_RULES, USERNAME_RULES, PASSWORD_RULES } from '../../global-settings';
import Helper from '../../helper';

const SignUp = () => {
  const { register, errors, handleSubmit, watch } = useForm();

  const onSibmit = () => {};

  const usernameClasses = [classes.textInput];
  const emailClasses = [classes.textInput];
  const passwordClasses = [classes.textInput];
  const repeatPasswordClasses = [classes.textInput];

  if (errors.username) {
    usernameClasses.push(classes.textInputError);
  }
  if (errors.email) {
    emailClasses.push(classes.textInputError);
  }
  if (errors.password) {
    passwordClasses.push(classes.textInputError);
  }
  if (errors.repeatPassword) {
    repeatPasswordClasses.push(classes.textInputError);
  }

  const errorMessages = Helper.getErrorMessages(errors);

  return (
    <form className={classes.wrapper} onSubmit={handleSubmit(onSibmit)}>
      <h2 className={classes.title}>Create new account</h2>
      <TextInput
        className={usernameClasses.join(' ')}
        name="username"
        signature="Username"
        placeholder="Username"
        ref={register(USERNAME_RULES)}
      />
      {errors.username && (
        <span className={classes.errorMessage}>{errorMessages.get('username')}</span>
      )}
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
      <TextInput
        className={repeatPasswordClasses.join(' ')}
        name="repeatPassword"
        type="password"
        signature="Repeat password"
        placeholder="Password"
        ref={register({ required: true, validate: (value) => value === watch('password') })}
      />
      {errors.repeatPassword && (
        <span className={classes.errorMessage}>{errorMessages.get('repeatPassword')}</span>
      )}
      <label className={classes.checkbox} htmlFor="i-agree">
        <Checkbox defaultChecked name="i-agree" />
        <span className={classes.checkboxText} id="i-agree">
          I agree to the processing of my personal information
        </span>
      </label>
      <Button type="primary" htmlType="submit">
        Create
      </Button>
      <span className={classes.signInLink}>
        Already have an account? <Link to={`${ROOT}/sign-in`}>Sign In.</Link>
      </span>
    </form>
  );
};

export default SignUp;
