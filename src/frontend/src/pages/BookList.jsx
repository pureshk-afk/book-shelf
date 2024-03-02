import { Helmet } from 'react-helmet';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { BookListContent } from '../components/pageComponents/blog/BookListContent';
import '../styles/book-list.css';

export const BookList = () => {
  return (
    <>
      <Helmet>
        <title>Book list</title>
      </Helmet>
      <Header />
      <BookListContent />
      <Footer />
    </>
  );
};
