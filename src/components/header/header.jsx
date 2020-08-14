import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  wrapper,
  homelink,
  signIn,
  signUp,
  logOut,
  createArticle,
  createArticleLink,
} from './header.module.scss';
import { ROOT } from '../../global-settings';
import selectors from '../../selectors';
import ProfileLink from '../profile-link';
import Button from '../button';

const Header = () => {
  const isLogged = useSelector(selectors.isLogged);

  return (
    <header className={wrapper}>
      <Link to={`${ROOT}/articles/`} className={homelink}>
        Realworld Blog
      </Link>
      {isLogged && (
        <>
          <Link to={`${ROOT}/new-article`} className={createArticleLink} tabIndex={-1}>
            <Button className={createArticle} text="Create article" />
          </Link>
          <ProfileLink />
          <Link to={`${ROOT}/logout`} className={logOut}>
            Log Out
          </Link>
        </>
      )}
      {!isLogged && (
        <>
          <Link to={`${ROOT}/sign-in`} className={signIn}>
            Sign In
          </Link>
          <Link to={`${ROOT}/sign-up`} className={signUp}>
            Sign Up
          </Link>
        </>
      )}
    </header>
  );
};

export default Header;
