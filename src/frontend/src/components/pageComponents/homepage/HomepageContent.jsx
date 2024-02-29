import { useEffect, useState } from 'react';
import { fetchCategories } from '../../../api/payload/LoadingData';
import { BookPreview } from './helpers/BookPreview';
import { BookSlider } from './helpers/BookSlider';
import { CategoryBlock } from './helpers/CategoryBlock';
import { SubHeader } from './helpers/SubHeader';

export const HomepageContent = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then(({ results }) => {
      setCategories(results);
    });
  }, []);

  return (
    <>
      <article>
        <SubHeader />
        <CategoryBlock categories={categories} />
        <BookPreview />
        {categories.map((category) => (
          <BookSlider key={category.id} category={category} />
        ))}
      </article>
    </>
  );
};
