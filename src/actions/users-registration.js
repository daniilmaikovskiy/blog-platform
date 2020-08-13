import Cookies from 'js-cookie';
import {
  USERS_REGISTRATION_LOADING_ERROR,
  USERS_REGISTRATION_LOADING_START,
  USERS_REGISTRATION_LOADING_END,
  USERS_REGISTRATION_ERRORS,
} from './action-types';
import { USER_DATA_COOKIE_NAME, USER_DATA_COOKIE_EXPIRES } from '../global-settings';

const usersRegistrationErrors = (errors) => {
  return {
    type: USERS_REGISTRATION_ERRORS,
    errors,
  };
};

const usersRegistrationLoadingError = (message) => {
  return {
    type: USERS_REGISTRATION_LOADING_ERROR,
    message,
  };
};

const usersRegistrationLoadingStart = () => {
  return {
    type: USERS_REGISTRATION_LOADING_START,
  };
};

const usersRegistrationLoadingEnd = () => {
  return {
    type: USERS_REGISTRATION_LOADING_END,
  };
};

const usersRegistration = (realworldService, data) => {
  return (dispatch) => {
    dispatch(usersRegistrationLoadingStart());

    const body = JSON.stringify({
      user: {
        username: data.username,
        email: data.email,
        password: data.password,
      },
    });

    realworldService
      .newUsersRegistration(body)
      .then((json) => {
        if (json.user) {
          Cookies.set(USER_DATA_COOKIE_NAME, JSON.stringify(json), {
            path: '/',
            expires: USER_DATA_COOKIE_EXPIRES,
          });
        }
        if (json.errors) {
          dispatch(usersRegistrationErrors(json.errors));
        }
      })
      .catch((error) => dispatch(usersRegistrationLoadingError(error.message)))
      .finally(() => dispatch(usersRegistrationLoadingEnd()));
  };
};

export default usersRegistration;
