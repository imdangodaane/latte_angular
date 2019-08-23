const BASE_URL = 'http://localhost:8000';
const API = 'api';
const REGISTER = 'register';
const DATABASE = 'database';
const ITEMS = 'items';
const ARTICLE = 'article';

const API_URL = {
    API_URL_ITEMS: `${BASE_URL}/${API}/${DATABASE}/${ITEMS}`,
    API_URL_REGISTER: `${BASE_URL}/${API}/${REGISTER}/`,
    API_URL_ARTICLE: {
      ALL_ARTICLES: `${BASE_URL}/${API}/${ARTICLE}/all`,
      NEW_ARTICLE: `${BASE_URL}/${API}/${ARTICLE}/new`,
      ARTICLE_BY_ID: `${BASE_URL}/${API}/${ARTICLE}/id`,
      ARTICLE_BY_SLUG: `${BASE_URL}/${API}/${ARTICLE}/slug`,
    }
};

export { API_URL };
