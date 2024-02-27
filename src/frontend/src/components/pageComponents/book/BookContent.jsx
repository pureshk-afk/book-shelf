import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  fetchBookById,
  fetchCategoryById,
} from '../../../api/payload/LoadingData';
import arrow from '../../../images/arrow.png';
import { BookMore } from './BookMore';

export const BookContent = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [category, setCategory] = useState({});

  useEffect(() => {
    fetchBookById(id).then((r) => {
      setBook(r);
      fetchCategoryById(r.category_id).then((r) => setCategory(r));
    });
  }, []);

  return (
    <div className='product'>
      <div className='shevron'>
        <Link to='/'>
          <img src={arrow} />
        </Link>
      </div>

      <div className='product-content'>
        <img src={book.preview} className='preview-book' />

        <div className='product-content_info'>
          <h1>Книга: {book.title}”</h1>
          <div className='product-content_info-menu'>
            <div className='price'>
              <h1>{book.description} ₽</h1>
            </div>
            <button className='button__classic'>Добавить в корзину</button>
          </div>

          <BookMore
            author={book.author}
            translation={book.translation}
            publication={book.publication}
            category_title={category.title}
          />
        </div>
      </div>
    </div>
  );
};
