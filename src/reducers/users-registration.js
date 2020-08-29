import {
  USERS_REGISTRATION_LOADING_ERROR,
  USERS_REGISTRATION_LOADING_START,
  USERS_REGISTRATION_LOADING_END,
  USERS_REGISTRATION_ERRORS,
} from '../actions/action-types';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  errors: {},
};

const usersRegistration = (state = initialState, action) => {
  switch (action.type) {
    case USERS_REGISTRATION_LOADING_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.message,
      };
    case USERS_REGISTRATION_LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case USERS_REGISTRATION_LOADING_END:
      return {
        ...state,
        loading: false,
      };
    case USERS_REGISTRATION_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default usersRegistration;
