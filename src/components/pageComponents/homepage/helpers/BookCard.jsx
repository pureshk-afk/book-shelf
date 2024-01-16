import React from 'react';

export const BookCard = ({cost, preview}) => {
  return (
    <div class="card">
        <img src={preview} alt="" />
        <h3>{cost} $</h3>
        <div class="card-buttons">
            <button type="button"> В корзину</button>
            <span class="heart material-symbols-outlined">favorite</span>
        </div>
    </div>
)
}
