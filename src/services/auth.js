import { baseUrl } from '../axios/base';

export const createAccount = async (payload) => {
  const response = baseUrl.post("/register", payload);
  return response;
};

export const verify = async (otp, email) => {
  const response = baseUrl.post(
    '/verify-email',
    { otp },
    {
      headers: {
        email: email,
      },
    }
  );
  return response;
};

export const forgotPassword = async (payload) => {
  const response = baseUrl.post("/forgotpassword", payload);
  return response;
};

export const login = async (data) => {
  const response = baseUrl.post("/login", data);
  return response;
};
