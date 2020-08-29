import { NUMBER_OF_ARTICLES_ON_PAGE as ARTICLES_NUMBER } from '../global-settings';

export default class RealworldService {
  rootUrl = 'https://conduit.productionready.io';

  url = `${this.rootUrl}/api`;

  getArticles = (page = 1) => {
    const url = `${this.url}/articles`;

    return fetch(`${url}?limit=${ARTICLES_NUMBER}&offset=${ARTICLES_NUMBER * (page - 1)}`, {
      'Content-Type': 'application/json; charset=utf-8',
    }).then((response) => response.json());
  };

  getSingleArticle = (slug) =>
    fetch(`${this.url}/articles/${slug}`).then((response) => response.json());

  newUsersRegistration = (body) =>
    fetch(`${this.url}/users`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    }).then((response) => response.json());

  usersAuthentication = (body) =>
    fetch(`${this.url}/users/login`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    }).then((response) => response.json());

  // Accepted fields: email, username, password, image, bio
  updateUser = (body, token) =>
    fetch(`${this.url}/user`, {
      method: 'PUT',
      body,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Token ${token}`,
      },
    }).then((response) => response.json());

  createArticle = (body, token) =>
    fetch(`${this.url}/articles`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Token ${token}`,
      },
    }).then((response) => response.json());

  deleteArticle = (slug, token) =>
    fetch(`${this.url}/articles/${slug}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then((response) => response.json());

  updateArticle = (slug, token, body) =>
    fetch(`${this.url}/articles/${slug}`, {
      method: 'PUT',
      body,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Token ${token}`,
      },
    }).then((response) => response.json());

  favoriteArticle = (slug, token) =>
    fetch(`${this.url}/articles/${slug}/favorite`, {
      method: 'POST',
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then((response) => response.json());

  unfavoriteArticle = (slug, token) =>
    fetch(`${this.url}/articles/${slug}/favorite`, {
      method: 'DELETE',
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then((response) => response.json());
}
