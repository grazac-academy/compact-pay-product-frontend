import axios from 'axios';

export const url = 'https://compact-pay-product.herokuapp.com/api/v1';

export const baseUrl = axios.create({
  baseUrl: `${url}/auth`,
});

baseUrl.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');
  request.headers.Authorization = `Bearer ${token ? token : ''}`;
  return request;
});
