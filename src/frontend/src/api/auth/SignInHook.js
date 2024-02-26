import axios from "axios";
import BASE_URL from "..";

export const SignInHook = async (loginData) => {
  const { data, status } = await axios
    .post(`${BASE_URL}/auth/login/`, loginData)
    .catch((e) => {
      return { data: null, status: e.status };
    });

  if (status >= 200 && status <= 300) {
    return data;
  }
  return null;
};
