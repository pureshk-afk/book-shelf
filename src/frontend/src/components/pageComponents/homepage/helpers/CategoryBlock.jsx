import { Link } from 'react-router-dom';

export const CategoryBlock = ({ categories }) => {
  return (
    <div className='category container-hp'>
      <h2 className='title-category__homepage'>Категории</h2>
      <div className='category__cards'>
        {categories?.map((category) => {
          return (
            <Link
              className='category-title__homepage'
              key={category.title}
              to={`/book/category/${category.id}`}
            >
              <div className='__card'>
                <h3>{category.title}</h3>
                <img src={category.preview} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
