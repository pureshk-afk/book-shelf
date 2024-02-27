import { BookPreview } from "./helpers/BookPreview";
import { BookSlider } from "./helpers/BookSlider";
import { CategoryBlock } from "./helpers/CategoryBlock";
import { PopularSlider } from "./helpers/PopularSlider";
import { SubHeader } from "./helpers/SubHeader";

export const HomepageContent = () => {
  return (
    <article>
      <SubHeader />
      <PopularSlider />
      <CategoryBlock />
      <BookPreview />
      <BookSlider title={"Зарубежная литература"} />
      <BookSlider title={"Магия"} />
    </article>
  );
};
