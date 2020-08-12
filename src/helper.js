import {
  USERNAME_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
} from './global-settings';

const minLengthMessage = (name, value) => `Your ${name} needs to be at least ${value} characters`;
const maxLengthMessage = (name, value) => `Your ${name} needs on more than ${value} characters`;

const getErrorMessages = (errors) => {
  const errorsKeys = Object.keys(errors);

  return errorsKeys.reduce((acc, key) => {
    const el = errors[key];

    switch (key) {
      case 'username': {
        if (el.type === 'minLength') {
          return acc.set('username', minLengthMessage('username', USERNAME_MIN_LENGTH));
        }
        if (el.type === 'maxLength') {
          return acc.set('username', maxLengthMessage('username', USERNAME_MAX_LENGTH));
        }
        if (el.type === 'required') {
          return acc.set('username', 'Required field');
        }
        break;
      }
      case 'email': {
        if (el.type === 'pattern') {
          return acc.set('email', 'Invalid email');
        }
        if (el.type === 'required') {
          return acc.set('email', 'Required field');
        }
        break;
      }
      case 'password': {
        if (el.type === 'minLength') {
          return acc.set('password', minLengthMessage('password', PASSWORD_MIN_LENGTH));
        }
        if (el.type === 'maxLength') {
          return acc.set('password', maxLengthMessage('password', PASSWORD_MAX_LENGTH));
        }
        if (el.type === 'required') {
          return acc.set('password', 'Required field');
        }
        break;
      }
      case 'repeatPassword': {
        if (el.type === 'validate') {
          return acc.set('repeatPassword', 'Passwords must match');
        }
        if (el.type === 'required') {
          return acc.set('repeatPassword', 'Required field');
        }
        break;
      }
      default:
        throw new Error(`Unexpected value '${key}' in getErrorMessages method`);
    }

    throw new Error(`Unexpected value '${key}' with type '${el.type}' in getErrorMessages method`);
  }, new Map());
};

const Helper = {
  getErrorMessages,
};

export default Helper;
