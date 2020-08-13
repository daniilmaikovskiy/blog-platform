export const NUMBER_OF_ARTICLES_ON_PAGE = 5;
export const ROOT = '/blog-platform';

const EMAIL_PATTERN = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/);

export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 20;
export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 40;

export const EMAIL_RULES = { required: true, pattern: EMAIL_PATTERN };
export const USERNAME_RULES = {
  required: true,
  minLength: USERNAME_MIN_LENGTH,
  maxLength: USERNAME_MAX_LENGTH,
};
export const PASSWORD_RULES = {
  required: true,
  minLength: PASSWORD_MIN_LENGTH,
  maxLength: PASSWORD_MAX_LENGTH,
};

export const USER_DATA_COOKIE_NAME = 'user';
export const USER_DATA_COOKIE_EXPIRES = 7;

const GLOBAL_SETTINGS = {
  NUMBER_OF_ARTICLES_ON_PAGE,
  ROOT,
  EMAIL_RULES,
  USERNAME_RULES,
  PASSWORD_RULES,
  USERNAME_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  USER_DATA_COOKIE_NAME,
  USER_DATA_COOKIE_EXPIRES,
};

export default GLOBAL_SETTINGS;
