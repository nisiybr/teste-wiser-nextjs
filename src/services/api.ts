import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6031e552081a01001754740e.mockapi.io/api/v1/',
});

export default api;
