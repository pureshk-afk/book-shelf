import { Link } from 'react-router-dom';
import arrowBack from '../../images/arrow.svg';

export const BackLink = ({ title }) => {
  return (
    <div className='cart-head'>
      <Link to={'/'} className='back-link'>
        <img src={arrowBack} alt='' className='arrow-icon' />
        Главная
      </Link>
      <h2 className='cart-title'>{title}</h2>
    </div>
  );
};
