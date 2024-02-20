import React from 'react'
import logo from "../../images/logo.png"
import "../../styles/homepage.css"

export const Header = () => {
  return (
    <header>
        <div class="content">
            <img src={logo} alt="" />
            <div class="content-menu">
                <a href="#">Книжные новости</a>
                <a href="#">Жанры</a>
                <a href="#">Контакты</a>
                <a href="#">Вход / регистрация</a>
            </div>
            <div class="burger">
                <span></span>
            </div>
        </div>
    </header>
    )
}
