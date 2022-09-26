import axios from 'axios';
import { getCookie } from '../helper/cookie';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
});

instance.interceptors.request.use(function (config) {
  const token = getCookie('accessToken');
  config!.headers!.Authorization = `Bearer ${token}`;

  return config;
});

export default instance;
