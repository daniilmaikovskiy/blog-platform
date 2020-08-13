import React from 'react';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import { wrapper, homelink, signIn, signUp } from './header.module.scss';
import { ROOT, USER_DATA_COOKIE_NAME } from '../../global-settings';

const Header = () => {
  let rightSection = null;

  if (!Cookie.get(USER_DATA_COOKIE_NAME)) {
    rightSection = (
      <>
        <Link to={`${ROOT}/sign-in`} className={signIn}>
          Sign In
        </Link>
        <Link to={`${ROOT}/sign-up`} className={signUp}>
          Sign Up
        </Link>
      </>
    );
  }

  return (
    <header className={wrapper}>
      <Link to={`${ROOT}/articles/`} className={homelink}>
        Realworld Blog
      </Link>
      {rightSection}
    </header>
  );
};

export default Header;
