import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInHook } from "../../../api/auth/SignInHook";
import CookieManager from "../../../managers/";
import "../../../styles/signin.css";
import { Loader } from "../../common/Loader";

export const SignInForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const signinSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const data = await SignInHook(loginData).catch(() => {
      setIsLoading(false);
      alert("Введены неверные данные");
      return;
    });

    setIsLoading(false);

    if (data) {
      CookieManager.setCookie("refresh", data.refresh);
      CookieManager.setCookie("access", data.access);
      navigate("/");
    }

    return data;
  };

  return (
    <div className="container">
      <div className="container_sign-in">
        <button
          className="button__classic"
          onClick={() => navigate("/registration")}
        >
          Зарегистрироваться
        </button>
        <p>или</p>
        <form className="form__signin" onSubmit={(e) => signinSubmit(e)}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input__classic"
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <input
            name="password"
            type="password"
            placeholder="Пароль"
            className="input__classic"
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />

          <button
            type="submit"
            disabled={isLoading}
            className={
              `button__classic button__classic__invert` +
              (isLoading ? " button__classic__invert__disabled" : "")
            }
          >
            {isLoading ? <Loader /> : "Войти"}
          </button>
        </form>
      </div>
    </div>
  );
};
