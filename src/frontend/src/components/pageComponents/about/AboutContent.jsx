import { BackLink } from '../../common/BackLink';

export const AboutContent = () => {
  return (
    <>
      <section className='container-cart'>
        <BackLink title={'О магазине'} />
      </section>

      <section className='about-container'>
        <img src='/about-preview.png' className='about-preview' />
      </section>

      <section className='container-cart about-font'>
        <h2 className='about-web-title'>
          Книжный онлайн-магазин «Книжная полка»
        </h2>
        <p className='about-web-text'>
          Однажды в небольшом городке появилась новая книжная полка -
          онлайн-магазин "Книжная полка". Ее создательница, молодая и
          амбициозная женщина по имени Ксения, была страстным любителем чтения с
          детства. Она всегда мечтала о том, чтобы каждый человек мог легко и
          удобно найти интересную книгу для себя.
        </p>
        <p className='about-web-text'>
          Ксения решила создать уникальный онлайн-магазин, где каждый клиент
          сможет найти книгу на любой вкус - от классики до современных
          бестселлеров. Она тщательно отобрала самые интересные и популярные
          книги, чтобы удовлетворить потребности каждого читателя.
        </p>
        <p className='about-web-text'>
          "Книжная полка" стала местом, где люди могли не только приобрести
          книги, но и обсудить их, поделиться впечатлениями и рекомендациями.
          Ксения также организовала онлайн-конференции с известными писателями и
          книжными блогерами, чтобы создать уютное сообщество книголюбов.
        </p>
      </section>

      <section className='container-cart about-font'>
        <h2 className='about-web-title'>
          Книжный онлайн-магазин «Книжная полка»
        </h2>
        <div className='about-creator'>
          <div className='about-creator-photo'>
            <img src='/developer.png' alt='' className='about-creator-image' />
          </div>
          <div className='about-creator-text'>
            <h3 className='about-creator-title'>Гуренко Ксения</h3>
            <h4 className='about-creator-position'>Main project developer</h4>
            <p className='about-web-text'>
              Ксения - создательница уникального книжного интернет-магазина
              "Книжная полка" - это молодая женщина с огромной страстью к чтению
              и непреодолимым желанием поделиться своей любовью к книгам с
              другими людьми. Она всегда была убеждена, что книги могут изменить
              мир, расширить горизонты и вдохновить на новые свершения.
            </p>
            <p className='about-web-text'>
              Создав "Книжную полку", Ксения не просто хотела продавать книги,
              она стремилась создать целое сообщество книголюбов, где каждый
              читатель может найти не только интересные книги, но и общение с
              единомышленниками, обменяться впечатлениями и открыть для себя
              новые литературные жемчужины.
            </p>
            <p className='about-web-text'>
              Ксения - человек с огромным энтузиазмом и преданностью своей мечте
              о том, чтобы каждый человек нашел свою идеальную книгу. Ее
              целеустремленность, творческий подход и любовь к чтению сделали
              "Книжную полку" одним из самых уважаемых и популярных книжных
              интернет-магазинов.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
