import { BookSlider } from './helpers/BookSlider';

export const HomepageContent = () => {
  return (
    <>
      <article>
        <SubHeader />
        <PopularSlider />
        <CategoryBlock />
        <BookPreview />
        <BookSlider title={'Зарубежная литература'} />
        <BookSlider title={'Магия'} />
      </article>
    </>
  );
};
