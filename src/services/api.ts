import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  //baseURL: 'http://localhost:3333'
  baseURL: 'http://192.168.2.103:3333' // seu IP
});

export default api;