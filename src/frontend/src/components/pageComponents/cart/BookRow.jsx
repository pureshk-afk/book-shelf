import { updateCartQuantityItem } from '../../../api/payload/LoadingData';
import { QuantityCounter } from './QuantityCounter';

export const BookRow = ({ bookQuantity, cartSetter, getCurrentCart }) => {
  return (
    <div className='cart-row'>
      <img className='cart-row-image' src={bookQuantity.book.preview} alt='' />
      <p className='cart-row-item cart-row-title'>{bookQuantity.book.title}</p>
      <p className='cart-row-item cart-row-price__once'>
        {bookQuantity.book.description + ' ₽'}
      </p>
      <div className='cart-row-item cart-row-quantity'>
        <QuantityCounter
          current_counter={bookQuantity.quantity}
          handler={(count) => {
            if (bookQuantity.quantity + count === 0) {
              alert('Количество товара не может быть равно нулю');
              return;
            }
            updateCartQuantityItem(bookQuantity.id, {
              quantity: bookQuantity.quantity + count,
            }).then(() => getCurrentCart(cartSetter));
          }}
        />
      </div>
      <p className='cart-row-item cart-row-total'>
        {`Итого: ${
          bookQuantity?.quantity *
          Number.parseFloat(bookQuantity?.book.description)
        } ₽`}
      </p>
    </div>
  );
};
