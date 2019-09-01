const BASE_URL = `https://serve.lattero.xyz`;
// const BASE_URL = `http://127.0.0.1:8000`;
const API = 'api';
const AUTHENTICATION = 'authentication';
const LOGIN = 'login';
const REGISTER = 'register';
const DATABASE = 'database';
const ITEMS = 'items';
const ARTICLE = 'article';

const API_URL = {
  API_URL_LOGIN: `${BASE_URL}/${API}/${AUTHENTICATION}/${LOGIN}`,
  API_URL_ITEMS: `${BASE_URL}/${API}/${DATABASE}/${ITEMS}`,
  API_URL_REGISTER: `${BASE_URL}/${API}/${REGISTER}`,
  API_URL_ARTICLE: {
    ALL_ARTICLES: `${BASE_URL}/${API}/${ARTICLE}/all`,
    NEW_ARTICLE: `${BASE_URL}/${API}/${ARTICLE}/new`,
    ARTICLE_BY_ID: `${BASE_URL}/${API}/${ARTICLE}/id`,
    ARTICLE_BY_SLUG: `${BASE_URL}/${API}/${ARTICLE}/slug`,
    SET_ARTICLE_ON_CAROUSEL: `${BASE_URL}/${API}/${ARTICLE}/id/setarticleoncarousel`,
  }
};

export {
  API_URL
};
