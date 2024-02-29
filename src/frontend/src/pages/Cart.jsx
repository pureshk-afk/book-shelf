import { Helmet } from 'react-helmet';
import { Header } from '../components/common/Header';
import { CartContent } from '../components/pageComponents/cart/CartContent';
import '../styles/cart.css';

export const Cart = () => {
  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <Header />
      <CartContent />
    </>
  );
};
