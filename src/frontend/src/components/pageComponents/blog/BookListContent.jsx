import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  fetchBooks,
  fetchCategoryById,
} from '../../../api/payload/LoadingData';
import arrowBack from '../../../images/arrow.svg';
import { BookCard } from '../homepage/helpers/BookCard';

export const BookListContent = () => {
  const { category_id } = useParams();
  const [category, setCategory] = useState({});
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchCategoryById(category_id).then((category) => setCategory(category));
    fetchBooks({ category_id: category_id }).then(({ results }) => {
      setBooks([...results, ...results, ...results, ...results, ...results]);
    });
  }, []);

  return (
    <>
      <section className='container-cart'>
        <div className='cart-head'>
          <Link to={'/'} className='back-link'>
            <img src={arrowBack} alt='' className='arrow-icon' />
            Главная
          </Link>
        </div>
      </section>

      <section className='book-list-preview'>
        <p className='book-list-title'>{category.title}</p>
      </section>

      <section className='book-list container-book-list'>
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            cost={book.description}
            preview={book.preview}
          />
        ))}
      </section>
    </>
  );
};
