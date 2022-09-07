import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
});

const token = sessionStorage.getItem('accessToken');

instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default instance;
