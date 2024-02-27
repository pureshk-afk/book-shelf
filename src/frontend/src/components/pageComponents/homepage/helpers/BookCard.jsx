export const BookCard = ({ cost, preview }) => {
  return (
    <div className='card'>
      <img src={preview} alt='' />
      <h3>{cost} $</h3>
      <div className='card-buttons'>
        <button type='button'> В корзину</button>
        <span className='heart material-symbols-outlined'>favorite</span>
      </div>
    </div>
  );
};
