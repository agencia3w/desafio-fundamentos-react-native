import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonkeeper.com/b/S70A',
});

export default api;
