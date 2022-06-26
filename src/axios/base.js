import axios from 'axios';

// export const baseLink =
//   process.env.NODE_ENV === "development"
//     ? "https://compact-pay-product.herokuapp.com/api/v1"
//     : "https://compact-pay-product.herokuapp.com";

    
export const url = "https://compact-pay-product.herokuapp.com/api/v1/auth";

export const baseUrl = axios.create({
  baseUrl: `${url}`,
});


baseUrl.interceptors.request.use((request) => {
  request.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return request;
});