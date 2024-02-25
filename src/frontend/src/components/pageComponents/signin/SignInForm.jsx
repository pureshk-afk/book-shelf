import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/signin.css";

export const SignInForm = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const signinSubmit = async (e) => {
    e.preventDefault();

    const data = await Axios.post(
      "https://api.bookshelf.labofdev.ru/api/v1/auth/login/",
      loginData
    );

    console.log(data);
  };

  return (
    <div className="container">
      <div className="container_sign-in">
        <button
          className="button__classic"
          onClick={() => navigate("/register")}
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
            className="button__classic button__classic__invert"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};
