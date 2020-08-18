import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import classes from './profile-link.module.scss';
import defaultAvatar from '../../img/avatar.png';
import { USER_DATA_COOKIE_NAME, ROOT } from '../../global-settings';
import actions from '../../actions';
import selectors from '../../selectors';

const ProfileLink = ({ className }) => {
  const dispatch = useDispatch();
  useSelector(selectors.usersEditingSuccessObj);
  const isLogged = useSelector(selectors.isLogged);

  let username;
  let userImage;

  if (isLogged) {
    try {
      const { user } = JSON.parse(Cookie.get(USER_DATA_COOKIE_NAME));
      username = user.username;
      userImage = user.image;
    } catch {
      dispatch(actions.logouting());
      return null;
    }
  } else {
    return null;
  }

  const avatar = userImage === null ? defaultAvatar : userImage;

  return (
    <Link className={[classes.wrapper, className].join(' ')} to={`${ROOT}/profile`}>
      <span>{username}</span>
      <img src={avatar} alt="" width="46" height="46" />
    </Link>
  );
};

ProfileLink.defaultProps = {
  className: '',
};

ProfileLink.propTypes = {
  className: PropTypes.string,
};

export default ProfileLink;
