import { Helmet } from 'react-helmet';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { Thanks } from '../components/pageComponents/deliver/Thanks';
import '../styles/thx.css';

export const DeliverThanks = () => {
  return (
    <>
      <Helmet>
        <title>Thanks!</title>
      </Helmet>
      <Header />
      <Thanks />
      <Footer />
    </>
  );
};
