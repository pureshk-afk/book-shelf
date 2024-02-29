import { useState } from 'react';
import preview from '../../../../images/image 1.png';
import { BookCard } from './BookCard';

export const BookSlider = ({ category }) => {
  const [data, setData] = useState([
    { cost: 111, preview: preview },
    { cost: 112, preview: preview },
    { cost: 113, preview: preview },
    { cost: 114, preview: preview },
    { cost: 115, preview: preview },
    { cost: 116, preview: preview },
    { cost: 117, preview: preview },
  ]);

  return (
    <div className='container-hp'>
      <h2>{category?.title}</h2>
      <div className='container-scroll'>
        {data.map((book) => (
          <BookCard key={book.cost} cost={book.cost} preview={book.preview} />
        ))}
      </div>
    </div>
  );
};
