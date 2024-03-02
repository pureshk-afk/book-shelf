import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthentication } from '../../api/auth/AuthUtils';
import logo from '../../images/logo.png';
import '../../styles/header.css';

export const Header = () => {
  const contentMenuRef = useRef();
  const [user, setUser] = useState(null);
  const openBurger = (e) => {
    e.target.classList.toggle('active');
    contentMenuRef.current.classList.toggle('open');
  };

  useEffect(() => {
    useAuthentication().then((r) => setUser(r));
  }, []);

  return (
    <header>
      {' '}
      <div className='header-content'>
        <img src={logo} alt='' />
        <div className='header-content-menu' ref={contentMenuRef}>
          <Link to='/'>Главная</Link>
          <Link to='/blog'>Блог</Link>
          <Link to='/about'>Контакты</Link>
          {!user ? (
            <>
              <Link to='/signin'>Вход</Link>
              <Link to='/registration'>Регистрация</Link>
            </>
          ) : (
            <>
              <Link to='/cart'>Корзина</Link>
            </>
          )}
        </div>
        <div className='burger' onClick={(e) => openBurger(e)}>
          <span className='someone'></span>
        </div>
      </div>
    </header>
  );
};
