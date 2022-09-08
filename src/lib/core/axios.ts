import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
});

const token = sessionStorage.getItem('accessToken');
instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

instance.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem('accessToken');
  config!.headers!.Authorization = `Bearer ${token}`;

  return config;
});

export default instance;
