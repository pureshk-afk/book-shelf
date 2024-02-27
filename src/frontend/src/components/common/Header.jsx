import { useRef } from "react";
import { Link } from "react-router-dom";
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
          <Link to="#">Книжные новости</Link>
          <Link to="#">Жанры</Link>
          <Link to="#">Контакты</Link>
          <span className="link_sign">
            <Link to="/signin">Вход</Link> {"/"}
            <Link to="/signin">/ регистрация</Link>
          </span>
        </div>
        <div className="burger" onClick={(e) => openBurger(e)}>
          <span></span>
        </div>
      </div>
    </header>
  );
};
