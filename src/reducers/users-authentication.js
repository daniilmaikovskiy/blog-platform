import {
  USERS_AUTHENTICATION_LOADING_ERROR,
  USERS_AUTHENTICATION_LOADING_START,
  USERS_AUTHENTICATION_LOADING_END,
  USERS_AUTHENTICATION_ERRORS,
} from '../actions/action-types';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  errors: {},
};

const usersAuthentication = (state = initialState, action) => {
  switch (action.type) {
    case USERS_AUTHENTICATION_LOADING_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.message,
      };
    case USERS_AUTHENTICATION_LOADING_START:
      return { ...state, loading: true };
    case USERS_AUTHENTICATION_LOADING_END:
      return { ...state, loading: false };
    case USERS_AUTHENTICATION_ERRORS:
      return { ...state, errors: action.errors };
    default:
      return state;
  }
};

export default usersAuthentication;
