import Cookies from 'js-cookie';
import { LOGOUT } from './action-types';
import { USER_DATA_COOKIE_NAME } from '../global-settings';

const logout = () => {
  return {
    type: LOGOUT,
  };
};

const logouting = () => {
  return (dispatch) => {
    Cookies.remove(USER_DATA_COOKIE_NAME, { path: '/' });
    dispatch(logout());
  };
};

export default logouting;
