import React from 'react';
import { Link } from 'react-router-dom';
import { wrapper, homelink, signIn, signUp } from './header.module.scss';

const Header = () => {
  return (
    <header className={wrapper}>
      <Link to="/" className={homelink}>
        Realworld Blog
      </Link>
      <Link to="/sign-in" className={signIn}>
        Sign In
      </Link>
      <Link to="/sign-up" className={signUp}>
        Sign Up
      </Link>
    </header>
  );
};

export default Header;
