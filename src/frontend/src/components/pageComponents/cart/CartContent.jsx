import { useEffect, useState } from 'react';
import { useAuthentication } from '../../../api/auth/AuthUtils';
import { fetchCarts } from '../../../api/payload/LoadingData';
import emptyCart from '../../../images/cart_no_items.png';
import { BackLink } from '../../common/BackLink';
import { CartTable } from './CartTable';

export const CartContent = () => {
  const [cart, setCart] = useState(null);

  const getCurrentCart = async (cartSetter) => {
    const authenticate = useAuthentication();
    authenticate.then(async (r) => {
      const cartList = await fetchCarts({ user_id: r.id, closed: 'false' });
      if (cartList.results.length > 0) cartSetter(cartList.results[0]);
    });
  };

  useEffect(() => {
    getCurrentCart(setCart);
  }, []);

  return (
    <div className='container-cart'>
      <BackLink title={'Корзина'} />

      <div className='cart-table'>
        {cart?.cart_books_items?.length > 0 ? (
          <CartTable
            cart={cart}
            cartSetter={setCart}
            getCurrentCart={getCurrentCart}
          />
        ) : (
          <img src={emptyCart} alt='' className='image__empty' />
        )}
      </div>
    </div>
  );
};
