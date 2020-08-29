import { USER_IS_LOGGED, LOGOUT } from '../actions/action-types';

const isLogged = (state = false, action) => {
  switch (action.type) {
    case USER_IS_LOGGED:
      return true;
    case LOGOUT:
      return false;
    default:
      return state;
  }
};

export default isLogged;
