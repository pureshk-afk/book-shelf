import { useNavigate } from 'react-router-dom';

export const SubHeader = () => {
  const navigate = useNavigate();

  return (
    <div className='welcome-post'>
      <div className='welcome-post__content'>
        <h1>
          <b className='hp-title'>Место где живут книги</b>
        </h1>
        <p className='hp-description'>
          Здесь вы можете приобрести книгу на любой вкус
        </p>
        <button className='hp-button' onClick={() => navigate('/about')}>
          <b>Узнать больше</b>
        </button>
      </div>
    </div>
  );
};
