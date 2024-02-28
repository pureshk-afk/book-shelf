import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthentication } from '../../../api/auth/AuthUtils';
import { fetchCarts } from '../../../api/payload/LoadingData';
import arrowBack from '../../../images/arrow.svg';
import emptyCart from '../../../images/cart_no_items.png';
import { CartTable } from './CartTable';

export const CartContent = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const authenticate = useAuthentication();
    authenticate.then(async (r) => {
      const cartList = await fetchCarts({ user_id: r.id, closed: 'false' });
      if (cartList.results.length > 0) setCart(cartList.results[0]);
    });
  }, []);

  return (
    <div className='container-cart'>
      <div className='cart-head'>
        <Link to={'/'} className='back-link'>
          <img src={arrowBack} alt='' className='arrow-icon' />
          Главная
        </Link>
        <h2 className='cart-title'>Корзина</h2>
      </div>

      <div className='cart-table'>
        {cart?.cart_books_items?.length > 0 ? (
          <CartTable cart={cart} />
        ) : (
          <img src={emptyCart} alt='' className='image__empty' />
        )}
      </div>
    </div>
  );
};
