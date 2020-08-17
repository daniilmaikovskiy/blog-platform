import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './header.module.scss';
import { ROOT } from '../../global-settings';
import selectors from '../../selectors';
import ProfileLink from '../profile-link';
import Button from '../button';

const Header = () => {
  const isLogged = useSelector(selectors.isLogged);

  const createArticleLinkClasses = [classes.createArticleLink];
  const logOutClasses = [classes.logOut];
  const profileLinkClasses = [];
  const signInClasses = [classes.signIn];
  const signUpClasses = [classes.signUp];

  if (isLogged) {
    signInClasses.push(classes.hidden);
    signUpClasses.push(classes.hidden);
  } else {
    createArticleLinkClasses.push(classes.hidden);
    profileLinkClasses.push(classes.hidden);
    logOutClasses.push(classes.hidden);
  }

  return (
    <header className={classes.wrapper}>
      <Link to={`${ROOT}/articles/`} className={classes.homelink}>
        Realworld Blog
      </Link>
      <Link to={`${ROOT}/new-article`} className={createArticleLinkClasses.join(' ')} tabIndex={-1}>
        <Button className={classes.createArticle} text="Create article" />
      </Link>
      <ProfileLink className={profileLinkClasses.join(' ')} />
      <Link to={`${ROOT}/logout`} className={logOutClasses.join(' ')}>
        Log Out
      </Link>
      <Link to={`${ROOT}/sign-in`} className={signInClasses.join(' ')}>
        Sign In
      </Link>
      <Link to={`${ROOT}/sign-up`} className={signUpClasses.join(' ')}>
        Sign Up
      </Link>
    </header>
  );
};

export default Header;
