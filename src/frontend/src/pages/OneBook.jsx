import { Helmet } from 'react-helmet';
import { Header } from '../components/common/Header';
import { BookContent } from '../components/pageComponents/book/BookContent';
import '../styles/product.css';

export const OneBook = () => {
  return (
    <>
      <Helmet>
        <title>Book</title>
      </Helmet>
      <Header />
      <BookContent />
    </>
  );
};
