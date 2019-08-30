const BASE_URL = `http://139.59.192.246:8001`;
// const BASE_URL = `http://127.0.0.1:8001`;
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
  API_URL_REGISTER: `${BASE_URL}/${API}/${REGISTER}/`,
  API_URL_ARTICLE: {
    ALL_ARTICLES: `${BASE_URL}/${API}/${ARTICLE}/all`,
    NEW_ARTICLE: `${BASE_URL}/${API}/${ARTICLE}/new`,
    ARTICLE_BY_ID: `${BASE_URL}/${API}/${ARTICLE}/id`,
    ARTICLE_BY_SLUG: `${BASE_URL}/${API}/${ARTICLE}/slug`,
  }
};

export {
  API_URL
};
