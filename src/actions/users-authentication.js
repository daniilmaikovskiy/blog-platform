import Cookies from 'js-cookie';
import {
  USERS_AUTHENTICATION_LOADING_ERROR,
  USERS_AUTHENTICATION_LOADING_START,
  USERS_AUTHENTICATION_LOADING_END,
  USERS_AUTHENTICATION_ERRORS,
} from './action-types';
import { USER_DATA_COOKIE_NAME, USER_DATA_COOKIE_EXPIRES } from '../global-settings';

const usersAuthenticationErrors = (errors) => {
  return {
    type: USERS_AUTHENTICATION_ERRORS,
    errors,
  };
};

const usersAuthenticationLoadingError = (message) => {
  return {
    type: USERS_AUTHENTICATION_LOADING_ERROR,
    message,
  };
};

const usersAuthenticationLoadingStart = () => {
  return {
    type: USERS_AUTHENTICATION_LOADING_START,
  };
};

const usersAuthenticationLoadingEnd = () => {
  return {
    type: USERS_AUTHENTICATION_LOADING_END,
  };
};

const usersAuthentication = (realworldService, data) => {
  return (dispatch) => {
    dispatch(usersAuthenticationLoadingStart());

    const body = JSON.stringify({
      user: {
        email: data.email,
        password: data.password,
      },
    });

    realworldService
      .usersAuthentication(body)
      .then((json) => {
        if (json.user) {
          Cookies.set(USER_DATA_COOKIE_NAME, JSON.stringify(json), {
            path: '/',
            expires: USER_DATA_COOKIE_EXPIRES,
          });
        }
        if (json.errors) {
          dispatch(usersAuthenticationErrors(json.errors));
        }
      })
      .catch((error) => dispatch(usersAuthenticationLoadingError(error.message)))
      .finally(() => dispatch(usersAuthenticationLoadingEnd()));
  };
};

export default usersAuthentication;
