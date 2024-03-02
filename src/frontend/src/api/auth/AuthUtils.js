import CookieManager from '../../managers';
import { FetchUserByToken, RefreshAccessToken } from './SignInHook';

export const useRefreshToken = async () => {
  const refreshToken = CookieManager.getCookie('refresh');

  if (!refreshToken) {
    return;
  }

  RefreshAccessToken(refreshToken)
    .then((r) => {
      CookieManager.setCookie('access', r.access);
      return;
    })
    .catch(() => {
      return;
    });
};

export const useAuthentication = async () => {
  const accessToken = CookieManager.getCookie('access');

  if (!accessToken) {
    return;
  }

  const data = FetchUserByToken(accessToken)
    .then((user) => {
      return user;
    })
    .catch(async (e) => {
      return await useRefreshToken();
    });

  return data;
};
