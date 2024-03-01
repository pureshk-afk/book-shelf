import { useEffect, useState } from 'react';
import { fetchBooks } from '../../../../api/payload/LoadingData';
import { BookCard } from './BookCard';

export const BookSlider = ({ category }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchBooks({ category_id: category.id }).then(({ results }) =>
      setData(results),
    );
  });

  return (
    <div className='container-hp'>
      <h2>{category?.title}</h2>
      <div className='container-scroll'>
        {data.map((book) => (
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
