import { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import '../../styles/header.css';

export const Header = () => {
  const contentMenuRef = useRef();

  const openBurger = (e) => {
    e.target.classList.toggle('active');
    contentMenuRef.current.classList.toggle('open');
  };

  return (
    <header>
      <div className='header-content'>
        <img src={logo} alt='' />
        <div className='header-content-menu' ref={contentMenuRef}>
          <a href='/blog'>Книжные новости</a>
          <a href='#'>Жанры</a>
          <a href='#'>Контакты</a>
          <Link to='/signin'>Вход</Link>
          <Link to='/signin'>Регистрация</Link>
        </div>
        <div className='burger' onClick={(e) => openBurger(e)}>
          <span className='someone'></span>
        </div>
      </div>
    </header>
  );
};
