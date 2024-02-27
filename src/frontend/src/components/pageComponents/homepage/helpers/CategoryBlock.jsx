import { useState } from "react";
import preview from "../../../../images/image 8 (2).png";

export const CategoryBlock = () => {
  const [categories, setCategories] = useState([
    { title: "Товары со скидкой", preview: preview },
    { title: "Товары со скидкой", preview: preview },
    { title: "Товары со скидкой", preview: preview },
    { title: "Товары со скидкой", preview: preview },
    { title: "Товары со скидкой", preview: preview },
    { title: "Товары со скидкой", preview: preview },
    { title: "Товары со скидкой", preview: preview },
    { title: "Товары со скидкой", preview: preview }
  ]);
  return (
    <div className="category">
      <div className="category__h">
        <h2>Категории</h2>
      </div>

      <div className="category__cards">
        {categories.map((category) => {
          return (
            <div className="__card" key={category.title}>
              <h3>{category.title}</h3>
              <img src={category.preview} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
