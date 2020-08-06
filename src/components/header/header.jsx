import React from 'react';
import { Link } from 'react-router-dom';
import { wrapper, homelink, signIn, signUp } from './header.module.scss';
import { ROOT } from '../../global-settings';

const Header = () => {
  return (
    <header className={wrapper}>
      <Link to={`${ROOT}/articles/`} className={homelink}>
        Realworld Blog
      </Link>
      <Link to={`${ROOT}/sign-in`} className={signIn}>
        Sign In
      </Link>
      <Link to={`${ROOT}/sign-up`} className={signUp}>
        Sign Up
      </Link>
    </header>
  );
};

export default Header;
