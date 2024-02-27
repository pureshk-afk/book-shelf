import { BookSlider } from './helpers/BookSlider';

export const HomepageContent = () => {
  return (
    <>
      <article>
        <div className='popular'>
          <h2>Популярно сейчас</h2>
          <div className='scroll'>
            <div className='slider-wrap'>
              <button
                id='prev-slide'
                className='slide-button material-symbols-outlined'
              >
                chevron_left
              </button>
              <div className='image-list'>
                <img src='Images/Без названия 1 (1).png' alt='' />
                <img src='Images/Rectangle 6 (1).png' alt='' />
                <img src='Images/image 1.png' alt='' />
                <img src='Images/image 7.png' alt='' />
                <img src='Images/image 8.png' alt='' />
                <img src='Images/image 8 (1).png' alt='' />
                <img src='Images/image 8 (2).png' alt='' />
              </div>
              <button
                onClick=''
                id='next-slide'
                className='slide-button material-symbols-outlined'
              >
                chevron_right
              </button>
            </div>
            <div className='slider-scrollbar'>
              <div className='scrollbar-track'>
                <div className='scrollbar-thumb'></div>
              </div>
            </div>
          </div>
        </div>

        <div className='blog'>
          <div className='blog_content'>
            <img src='Images/sol.png' />
            <div className='blog_content-text'>
              <div className='blog_content-text_data'>
                <h6>23.12.2023</h6>
              </div>
              <div className='blog_content-text_hader'>
                <h1>Судьба человека</h1>
                <h2>Краткое содержание рассказа Шолохова</h2>
              </div>

              <div className='blog_content-text_opisanie'>
                <p>
                  {' '}
                  Один из самых тяжёлых и жизнеутверждающих рассказов в
                  советской литературе – «Судьба человека». Кратко излагаем его
                  сюжет.
                </p>
              </div>
              <div className='blog_content-text_l'>
                <p className='blog_content-text_l-p'>
                  Больше у нас в <b>блоге</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <BookSlider title={'Фантастика'} />
        <BookSlider title={'Достоевский'} />
      </article>
    </>
  );
};
