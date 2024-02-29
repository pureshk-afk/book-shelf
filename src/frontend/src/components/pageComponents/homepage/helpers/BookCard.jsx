import { Link } from 'react-router-dom';

export const BookCard = ({ id, cost, preview }) => {
  return (
    <div className='card'>
      <img src={preview} alt='' />
      <h3>{cost} $</h3>
      <div className='card-buttons'>
        <Link to={`/book/${id}`} className='card_button'>
          В корзину
        </Link>
      </div>
    </div>
  );
};
