export const QuantityCounter = ({ current_counter, handler }) => {
  return (
    <div className='quantity-counter'>
      <button className='quantity-button' onClick={() => handler(1)}>
        +
      </button>
      {current_counter}
      <button className='quantity-button' onClick={() => handler(-1)}>
        -
      </button>
    </div>
  );
};
