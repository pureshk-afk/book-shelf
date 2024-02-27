import { Helmet } from 'react-helmet';
import { Header } from '../components/common/Header';
import { CartContent } from '../components/pageComponents/cart/CartContent';

export const Cart = () => {
  return (
    <>
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <Header />
      <CartContent />
    </>
  );
};
