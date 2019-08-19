const BASE_URL = 'http://localhost:8000';
const API = 'api';
const REGISTER = 'register';
const DATABASE = 'database';
const ITEMS = 'items';

const API_URL = {
    API_URL_ITEMS: `${BASE_URL}` + 'api/' + 'database/' + 'items',
    API_URL_REGISTER: `${BASE_URL}` + '/' + `${API}` + '/' + `${REGISTER}` + '/',
};

export { API_URL };
