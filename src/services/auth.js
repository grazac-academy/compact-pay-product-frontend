<<<<<<< HEAD
import { baseUrl } from '../axios/base';


export const createAccount = async (payload) => {
  const response = baseUrl.post('/register', payload);
=======
import axios from "axios";
import { baseLink } from "../axios/base";

export const createAccount = async (data) => {
  const response = await axios({
    method: "post",
    url: `${baseLink}/auth/register`,
    data: data,
  });
  return response;
};

export const login = async (data) => {
  const response = await axios({
    method: "post",
    url: `${baseLink}/auth/login`,
    data: data,
  });
  return response;
};

export const verify = async (id, otp) => {
  const response = await axios({
    method: "post",
    url: `${baseLink}/auth/verify-email?_id=${id}`,
    data: { otp: otp },
  });
>>>>>>> main
  return response;
};


export const verify = async (otp, email) => {
  const response = baseUrl.post('/verify-email', otp, email);
  return response;
};

export const login = async (data) => {
  const response = baseUrl.post('/login', data);
  return response;
};


