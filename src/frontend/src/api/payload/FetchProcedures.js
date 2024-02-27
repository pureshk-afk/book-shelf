import { useAuthentication } from '../auth/AuthUtils';
import {
  createCart,
  createCartQuantityItem,
  fetchCarts,
  updateCart,
} from './LoadingData';

export const addItemToCart = async (book, navigate) => {
  let currentCart;
  const user = await useAuthentication();

  if (!user) navigate('/signin');

  const cartList = await fetchCarts({ user_id: user.id, closed: 'false' });

  if (cartList.results.length == 0) {
    currentCart = await createCart({ closed: false, user_id: user.id });
  } else {
    currentCart = cartList.results[0];
  }

  let foundedCBI = currentCart.cart_books_items.find((CBI) => {
    return CBI.book_id == book.id;
  });

  if (foundedCBI) {
    alert('Данный товар уже находится в корзине!');
    return;
  }

  let cartQuantity = await createCartQuantityItem({
    quantity: 1,
    book_id: book.id,
  });

  currentCart = await updateCart(currentCart.id, {
    cart_books: [...currentCart.cart_books, cartQuantity.id],
  });
};
