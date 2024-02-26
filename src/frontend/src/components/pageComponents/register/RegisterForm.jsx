import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterInHook, SignInHook } from "../../../api/auth/SignInHook";
import CookieManager from "../../../managers/";
import "../../../styles/registration.css";
import { Loader } from "../../common/Loader";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirm: ""
  });

  const registrationSubmit = async (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.password_confirm) {
      alert("Пароли не совпадают!");
      return;
    }

    delete registerData.password_confirm;
    setRegisterData(registerData);
    setIsLoading(true);

    await RegisterInHook(registerData)
      .then(async () => {
        const loginData = await SignInHook({
          email: registerData.email,
          password: registerData.password
        }).catch(() => {
          setIsLoading(false);
          alert("Введены неверные данные");
          return;
        });

        CookieManager.setCookie("refresh", loginData.refresh);
        CookieManager.setCookie("access", loginData.access);

        setIsLoading(false);
        navigate("/");
      })
      .catch(() => {
        setIsLoading(false);
        alert("Введены неверные данные");
        return;
      });
  };

  return (
    <div className="container">
      <div className="container_register">
        <button className="button__classic" onClick={() => navigate("/signin")}>
          Войти
        </button>
        <p>или</p>
        <form
          className="form__register"
          onSubmit={(e) => registrationSubmit(e)}
        >
          <input
            type="text"
            placeholder="Имя пользователя"
            className="input__classic"
            onChange={(e) =>
              setRegisterData({ ...registerData, username: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            className="input__classic"
            onChange={(e) =>
              setRegisterData({ ...registerData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Пароль"
            className="input__classic"
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Повтор пароля"
            className="input__classic"
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                password_confirm: e.target.value
              })
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
            {isLoading ? <Loader /> : "Зарегистрироваться"}
          </button>
        </form>
      </div>
    </div>
  );
};
