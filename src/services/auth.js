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
    url: `${baseLink}/auth/login/user`,
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
  return response;
};
