import React from 'react';

export const BookMore = ({
  author,
  translation,
  publication,
  category_title,
}) => {
  return (
    <div className='opisanie'>
      <p>Автор: {author}</p>
      <p>Издание: {publication}</p>
      <p>Год издания: {publication}</p>
      <p>Переводчик: {translation}</p>
      <p>Жанры: {category_title}</p>
    </div>
  );
};
