import { NUMBER_OF_ARTICLES_ON_PAGE as ARTICLES_NUMBER } from '../global-settings';

export default class RealworldService {
  url = 'https://conduit.productionready.io/api';

  getArticles = (page = 1) =>
    fetch(
      `${this.url}/articles?limit=${ARTICLES_NUMBER}&offset=${ARTICLES_NUMBER * page - 1}`
    ).then((response) => response.json());
}
