import React, { useContext } from 'react';
import { Button } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Cookie from 'js-cookie';
import classes from './sign-in.module.scss';
import TextInput from '../text-input';
import { ROOT, EMAIL_RULES, PASSWORD_RULES, USER_DATA_COOKIE_NAME } from '../../global-settings';
import Helper from '../../helper';
import RealworldServiceContext from '../realworld-service-context';
import actions from '../../actions';
import ErrorAlert from '../error-alert';
import Spinner from '../spinner';
import selectors from '../../selectors';

const SignIn = () => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();
  const realworldService = useContext(RealworldServiceContext);

  const onSibmit = (data) => {
    dispatch(actions.usersAuthentication(realworldService, data));
  };

  const emailClasses = [classes.textInput];
  const passwordClasses = [classes.textInput];

  if (errors.email) {
    emailClasses.push(classes.textInputError);
  }
  if (errors.password) {
    passwordClasses.push(classes.textInputError);
  }

  const errorMessages = Helper.getErrorMessages(errors);

  const error = useSelector(selectors.usersAuthenticationLoadingError);
  const errorMessage = useSelector(selectors.usersAuthenticationErrorMessage);
  const loading = useSelector(selectors.usersAuthenticationLoading);
  const authenticationErrors = useSelector(selectors.usersAuthenticationErrors);

  if (Cookie.get(USER_DATA_COOKIE_NAME)) {
    return <Redirect to={`${ROOT}/`} />;
  }

  if (error) {
    return <ErrorAlert description={errorMessage} />;
  }

  if (loading) {
    return <Spinner />;
  }

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
      {authenticationErrors['email or password'] && (
        <span
          className={classes.errorMessage}
        >{`Email or password ${authenticationErrors['email or password']}`}</span>
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
