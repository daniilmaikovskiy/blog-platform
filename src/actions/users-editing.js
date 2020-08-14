import Cookies from 'js-cookie';
import {
  USERS_EDITING_LOADING_ERROR,
  USERS_EDITING_LOADING_START,
  USERS_EDITING_LOADING_END,
  USERS_EDITING_ERRORS,
  USERS_EDITING_SUCCESS,
} from './action-types';
import { USER_DATA_COOKIE_NAME, USER_DATA_COOKIE_EXPIRES } from '../global-settings';
import logouting from './logouting';

const usersEditingSuccess = () => {
  return {
    type: USERS_EDITING_SUCCESS,
  };
};

const usersEditingErrors = (errors) => {
  return {
    type: USERS_EDITING_ERRORS,
    errors,
  };
};

const usersEditingLoadingError = (message) => {
  return {
    type: USERS_EDITING_LOADING_ERROR,
    message,
  };
};

const usersEditingLoadingStart = () => {
  return {
    type: USERS_EDITING_LOADING_START,
  };
};

const usersEditingLoadingEnd = () => {
  return {
    type: USERS_EDITING_LOADING_END,
  };
};

const usersEditing = (realworldService, data) => {
  return (dispatch) => {
    let token;

    try {
      const { user } = JSON.parse(Cookies.get(USER_DATA_COOKIE_NAME));
      token = user.token;
    } catch {
      dispatch(logouting());
      return;
    }

    dispatch(usersEditingLoadingStart());

    const user = {
      email: data.email,
      username: data.username,
    };

    if (data.password) {
      user.password = data.password;
    }

    if (data.image) {
      user.image = data.image;
    }

    const body = JSON.stringify({
      user,
    });

    realworldService
      .updateUser(body, token)
      .then((json) => {
        if (json.user) {
          Cookies.set(USER_DATA_COOKIE_NAME, JSON.stringify(json), {
            path: '/',
            expires: USER_DATA_COOKIE_EXPIRES,
            sameSite: 'strict',
          });
          dispatch(usersEditingSuccess());
        }
        if (json.errors) {
          dispatch(usersEditingErrors(json.errors));
        }
      })
      .catch((error) => dispatch(usersEditingLoadingError(error.message)))
      .finally(() => dispatch(usersEditingLoadingEnd()));
  };
};

export default usersEditing;
