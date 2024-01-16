import React from 'react'
import { BookCard } from "./helpers/BookCard";
import preview from "../../../images/Без названия 1 (1).png";

export const HomepageContent = () => {
  return (
    <>
    <article>
        <div class="popular">
            <h2>Популярно сейчас</h2>
            <div class="scroll">
                <div class="slider-wrap">
                    <button onclick="" id="prev-slide" class="slide-button material-symbols-outlined">chevron_left</button>
                    <div class="image-list">
                        <img src="Images/Без названия 1 (1).png" alt="" />
                        <img src="Images/Rectangle 6 (1).png" alt=""/>
                        <img src="Images/image 1.png" alt=""/>
                        <img src="Images/image 7.png" alt=""/>
                        <img src="Images/image 8.png" alt=""/>
                        <img src="Images/image 8 (1).png" alt=""/>
                        <img src="Images/image 8 (2).png" alt=""/>
                    </div>
                    <button onclick="" id="next-slide" class="slide-button material-symbols-outlined">chevron_right</button>
                </div>
                <div class="slider-scrollbar">
                    <div class="scrollbar-track">
                        <div class="scrollbar-thumb">

                        </div>
                    </div>
                </div>
            </div>
        </div>

       <div class="blog">
            <div class="blog_content">
                <img src="Images/sol.png" />
                <div class="blog_content-text">
                    <div class="blog_content-text_data">
                        <h6>23.12.2023</h6>
                    </div>
                    <div class="blog_content-text_hader">
                        <h1>Судьба человека</h1>
                        <h2>Краткое содержание рассказа Шолохова</h2>

                    </div>

                    <div class="blog_content-text_opisanie">
                        <p> Один из самых тяжёлых и жизнеутверждающих рассказов в советской литературе – «Судьба человека». Кратко излагаем его сюжет.</p>
                        
                    </div>
                    <div class="blog_content-text_l">
                        <p class="blog_content-text_l-p">Больше у нас в <b>блоге</b></p>
                    </div>

                </div>
            </div>
       </div>


       <div class="fantasy">
            <h2>Фантастика</h2>
            <div class="container-scroll">
                <div class="container-scroll_slider-wrap">
                    <button onclick="" id="prev-slides" class="slide-buttonn material-symbols-outlined">arrow_left_alt </button>
                    <div class="image-list_two">
                        <BookCard cost={111} preview={preview} />
                        <BookCard cost={22} preview={preview} />
                        <BookCard cost={23} preview={preview} />
                        <BookCard cost={14411} preview={preview} />
                        <BookCard cost={11321} preview={preview} />
                        <BookCard cost={1151} preview={preview} />
                    </div>
                    <button onclick="" id="next-slides" class="slide-buttonn material-symbols-outlined">arrow_right_alt</button>
                </div>
            </div>
        </div>

        <div class="fantasy">
            <h2>Зарубежная литература</h2>
            <div class="container-scroll_two">
                <div class="container-scroll_slider-wrapp">
                    <button onclick="" id="prev-slides_two" class="slide-buttonnn material-symbols-outlined">arrow_left_alt </button>
                    <div class="image-list_three">
                        <div class="card">
                            <img src="Images/Без названия 1 (1).png" alt="" />
                            <h3>455 ₽</h3>
                            <div class="card-buttons">
                                
                                <button type="button"> В корзину</button>
                                <span class="heart material-symbols-outlined">favorite</span>
                            </div>
                            
                        </div>
                        <div class="card">
                            <img src="Images/Rectangle 6 (1).png" alt="" />
                            <h3>455 ₽</h3>
                            <div class="card-buttons">
                                
                                <button type="button"> В корзину</button>
                                <span class="heart material-symbols-outlined">favorite</span>
                            </div>
                        </div>
                        <div class="card">
                            <img src="Images/image 1.png" alt="" />
                            <h3>455 ₽</h3>
                            <div class="card-buttons">
                                
                                <button type="button"> В корзину</button>
                                <span class="heart material-symbols-outlined">favorite</span>
                            </div>
                        </div>
                        <div class="card">
                            <img src="Images/image 7.png" alt="" />
                            <h3>455 ₽</h3>
                            <div class="card-buttons">
                                
                                <button type="button"> В корзину</button>
                                <span class="heart material-symbols-outlined">favorite</span>
                            </div>
                        </div>
                        <div class="card">
                            <img src="Images/image 8.png" alt="" />
                            <h3>455 ₽</h3>
                            <div class="card-buttons">
                                
                                <button type="button"> В корзину</button>
                                <span class="heart material-symbols-outlined">favorite</span>
                            </div>
                        </div>
                        <div class="card">
                            <img src="Images/image 8 (1).png" alt="" />
                            <h3>455 ₽</h3>
                            <div class="card-buttons">
                                
                                <button type="button"> В корзину</button>
                                <span class="heart material-symbols-outlined">favorite</span>
                            </div>
                        </div>
                        <div class="card">
                            <img src="Images/image 8 (2).png" alt="" />
                            <h3>455 ₽</h3>
                            <div class="card-buttons">
                                
                                <button type="button"> В корзину</button>
                                <span class="heart material-symbols-outlined">favorite</span>
                            </div>
                        </div>
                        
                    </div>
                    <button onclick="" id="next-slides_two" class="slide-buttonnn material-symbols-outlined">arrow_right_alt</button>
                </div>
                
            </div>
        </div>
    </article>
    </>
  )
}
