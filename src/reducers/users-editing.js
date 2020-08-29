import {
  USERS_EDITING_LOADING_ERROR,
  USERS_EDITING_LOADING_START,
  USERS_EDITING_LOADING_END,
  USERS_EDITING_ERRORS,
  USERS_EDITING_SUCCESS,
} from '../actions/action-types';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  errors: {},
  successObj: {},
};

const usersEditing = (state = initialState, action) => {
  switch (action.type) {
    case USERS_EDITING_LOADING_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.message,
      };
    case USERS_EDITING_LOADING_START:
      return { ...state, loading: true };
    case USERS_EDITING_LOADING_END:
      return { ...state, loading: false };
    case USERS_EDITING_ERRORS:
      return { ...state, errors: action.errors };
    case USERS_EDITING_SUCCESS:
      return { ...state, successObj: {} };
    default:
      return state;
  }
};

export default usersEditing;
