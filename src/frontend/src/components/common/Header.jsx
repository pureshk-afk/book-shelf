import { useRef } from "react";
import logo from "../../images/logo.png";
import "../../styles/header.css";

export const Header = () => {
  const contentMenuRef = useRef();

  const openBurger = (e) => {
    e.target.classList.toggle("active");
    contentMenuRef.current.classList.toggle("open");
  };

  return (
    <header>
      <div className="content">
        <img src={logo} alt="" />
        <div className="content-menu" ref={contentMenuRef}>
          <a href="#">Книжные новости</a>
          <a href="#">Жанры</a>
          <a href="#">Контакты</a>
          <a href="#">Вход / регистрация</a>
        </div>
        <div className="burger" onClick={(e) => openBurger(e)}>
          <span></span>
        </div>
      </div>
    </header>
  );
};
