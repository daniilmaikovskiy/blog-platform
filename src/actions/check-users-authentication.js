import Cookie from 'js-cookie';
import { USER_IS_LOGGED } from './action-types';
import { USER_DATA_COOKIE_NAME } from '../global-settings';

const userIsLogged = () => {
  return {
    type: USER_IS_LOGGED,
  };
};

const checkUsersAuthentication = () => {
  return (dispatch) => {
    if (Cookie.get(USER_DATA_COOKIE_NAME)) {
      dispatch(userIsLogged());
    }
  };
};

export default checkUsersAuthentication;
