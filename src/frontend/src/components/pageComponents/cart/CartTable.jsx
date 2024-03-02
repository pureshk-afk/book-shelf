import { Link } from 'react-router-dom';
import { BookRow } from './BookRow';

export const CartTable = ({ cart, cartSetter, getCurrentCart }) => {
  return (
    <div className='table-cart__skeleton'>
      <div className='table-head'></div>
      <div className='table-content'>
        {cart?.cart_books_items?.map((bookQuantity) => {
          return (
            <BookRow
              key={bookQuantity.id}
              bookQuantity={bookQuantity}
              cartSetter={cartSetter}
              getCurrentCart={getCurrentCart}
            />
          );
        })}
      </div>
      <div className='table-bottom'>
        <Link to={'/choose-town'} className='button__town'>
          Купить
        </Link>
      </div>
    </div>
  );
};
