import { useState } from "react";
import { Link } from "react-router-dom";
import preview from "../../../../images/image 1.png";

export const PopularSlider = () => {
  const [books, setBooks] = useState([
    { preview: preview },
    { preview: preview },
    { preview: preview },
    { preview: preview },
    { preview: preview },
    { preview: preview },
    { preview: preview },
    { preview: preview }
  ]);
  return (
    <div className="popular">
      <h2>Популярно сейчас</h2>
      <div className="scroll">
        <div className="slider-wrap">
          <button
            id="prev-slide"
            className="slide-button material-symbols-outlined"
          >
            chevron_left
          </button>
          <div className="image-list">
            {books.map((book, index) => (
              <Link to="/product" key={index}>
                <img src={book.preview} alt="" />
              </Link>
            ))}
          </div>
          <button
            id="next-slide"
            className="slide-button material-symbols-outlined"
          >
            chevron_right
          </button>
        </div>
        <div className="slider-scrollbar">
          <div className="scrollbar-track">
            <div className="scrollbar-thumb"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
