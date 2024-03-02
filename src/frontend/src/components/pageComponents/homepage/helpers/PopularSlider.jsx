import { useEffect, useState } from 'react';
import { fetchBooks } from '../../../../api/payload/LoadingData';
import { BookCard } from './BookCard';

export const PopularSlider = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks({ page: 1, page_size: 10 }).then(({ results }) =>
      setBooks(results),
    );
  });

  return (
    <div className='container-hp'>
      <h2 className='slider-title'>Популярно сейчас</h2>
      <div className='container-scroll'>
        {books?.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            cost={book.description}
            preview={book.preview}
          />
        ))}
      </div>
    </div>
  );
};
