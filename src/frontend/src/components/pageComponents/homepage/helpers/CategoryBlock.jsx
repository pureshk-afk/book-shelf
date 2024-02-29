export const CategoryBlock = ({ categories }) => {
  return (
    <div className='category'>
      <div className='category__h'>
        <h2>Категории</h2>
      </div>

      <div className='category__cards'>
        {categories?.map((category) => {
          return (
            <div className='__card' key={category.title}>
              <h3>{category.title}</h3>
              <img src={category.preview} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
