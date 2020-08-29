import Cookie from 'js-cookie';
import { USER_DATA_COOKIE_NAME } from '../global-settings';
import { userIsLogged } from './action-creators';

const checkUsersAuthentication = () => {
  return (dispatch) => {
    if (Cookie.get(USER_DATA_COOKIE_NAME)) {
      dispatch(userIsLogged());
    }
  };
};

export default checkUsersAuthentication;
