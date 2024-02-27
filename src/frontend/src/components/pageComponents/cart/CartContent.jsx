import { Link } from 'react-router-dom';
import arrowBack from '../../../images/arrow.png';

export const CartContent = () => {
  return (
    <div className='container'>
      <article className='cart-head'>
        <Link to={'/'}>
          <img src={arrowBack} alt='' />
          Главная
        </Link>
        <h2 className='cart-title'>Корзина</h2>
      </article>
    </div>
  );
};
