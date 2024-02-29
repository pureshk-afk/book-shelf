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
    </div>
  );
};
