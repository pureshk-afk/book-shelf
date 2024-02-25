import { useState } from "react";
import preview from "../../../../images/image 1.png";
import { BookCard } from "./BookCard";

export const BookSlider = ({ title }) => {
  const [data, setData] = useState([
    { cost: 111, preview: preview },
    { cost: 112, preview: preview },
    { cost: 113, preview: preview },
    { cost: 114, preview: preview },
    { cost: 115, preview: preview },
    { cost: 116, preview: preview },
    { cost: 117, preview: preview }
  ]);

  return (
    <div className="fantasy">
      <h2>{title}</h2>
      <div className="container-scroll">
        <div className="container-scroll_slider-wrap">
          <button
            onClick=""
            id="prev-slides"
            className="slide-button material-symbols-outlined"
          >
            {"<-"}
          </button>
          <div className="image-list_two">
            {data.map((book) => (
              <BookCard
                key={book.cost}
                cost={book.cost}
                preview={book.preview}
              />
            ))}
          </div>
          <button
            onClick=""
            id="next-slides"
            className="slide-button material-symbols-outlined"
          >
            {"->"}
          </button>
        </div>
      </div>
    </div>
  );
};
