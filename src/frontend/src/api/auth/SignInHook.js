import axios from 'axios';
import BASE_URL from '..';

export const SignInHook = async (loginData) => {
  const { data, status } = await axios
    .post(`${BASE_URL}/auth/login/`, loginData)
    .catch((e) => {
      throw new Error(e);
    });

  if (status >= 200 && status <= 300) {
    return data;
  }
  throw new Error(data);
};

export const RegisterInHook = async (loginData) => {
  const { data, status } = await axios
    .post(`${BASE_URL}/auth/register/`, loginData)
    .catch((e) => {
      throw new Error(e);
    });

  if (status >= 200 && status <= 300) {
    return data;
  }

  throw new Error(data);
};

export const FetchUserByToken = async (token) => {
  const { data, status } = await axios
    .get(`${BASE_URL}/auth/user/by/token`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch(() => {
      throw new Error();
    });

  if (status >= 200 && status < 300) {
    return data;
  }

  throw new Error();
};

export const RefreshAccessToken = async (token) => {
  const { data, status } = await axios
    .post(`${BASE_URL}/auth/refresh/`, { refresh: token })
    .catch(() => {
      throw new Error();
    });

  if (status >= 200 && status <= 300) {
    return data;
  }
  throw new Error();
};
