import bookStack from '../../images/book-stack.png';
import logo from '../../images/logo.png';
import '../../styles/footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className='footer_all-content'>
        <div className='footer_all-content__two'>
          <div className='footer_all-content__many'>
            <img className='logo' src={logo} alt='' />
            <hr />
            <div className='__info'>
              <div className='info__content'>
                <div className='card-one'>
                  <h4>О нас</h4>
                  <div className='card-one__links'>
                    <div className='link'>
                      <a>Блог</a>
                      <a>Категории товаров</a>
                      <a>Книги</a>
                      <a>Наши соцсети</a>
                    </div>
                  </div>
                </div>

                <div className='card-one'>
                  <h4>Информация</h4>
                  <div className='card-one__links'>
                    <div className='link'>
                      <a>Адреса магазинов</a>
                      <a>Доставка</a>
                      <a>Оплата</a>
                    </div>
                  </div>
                </div>
                <div className='card-one'>
                  <h4>Свяжитесь с нами</h4>
                  <div className='card-one__links'>
                    <div className='link'>
                      <p>+7 (918) 302-56-71</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className='book_pic' src={bookStack} />
        </div>
      </div>
    </footer>
  );
};
