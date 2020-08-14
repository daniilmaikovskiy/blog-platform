import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Cookie from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import classes from './profile-link.module.scss';
import defaultAvatar from '../../img/avatar.png';
import { USER_DATA_COOKIE_NAME, ROOT } from '../../global-settings';
import actions from '../../actions';
import selectors from '../../selectors';

const ProfileLink = () => {
  const dispatch = useDispatch();
  useSelector(selectors.usersEditingSuccessObj);

  let username;
  let userImage;

  try {
    const { user } = JSON.parse(Cookie.get(USER_DATA_COOKIE_NAME));
    username = user.username;
    userImage = user.image;
  } catch {
    dispatch(actions.logouting());
    return <Redirect to={`${ROOT}/`} />;
  }

  const avatar = userImage === null ? defaultAvatar : userImage;

  return (
    <Link className={classes.wrapper} to={`${ROOT}/profile`}>
      <span>{username}</span>
      <img src={avatar} alt="" width="46" height="46" />
    </Link>
  );
};

export default ProfileLink;
