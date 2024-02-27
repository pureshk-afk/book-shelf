export const BookPreview = () => {
  return (
    <div className="blog">
      <div className="blog_content">
        <img src="Images/sol.png" />
        <div className="blog_content-text">
          <div className="blog_content-text_data">
            <h6>23.12.2023</h6>
          </div>
          <div className="blog_content-text_hader">
            <h1>Судьба человека</h1>
            <h2>Краткое содержание рассказа Шолохова</h2>
          </div>

          <div className="blog_content-text_opisanie">
            <p>
              {" "}
              Один из самых тяжёлых и жизнеутверждающих рассказов в советской
              литературе – «Судьба человека». Кратко излагаем его сюжет.
            </p>
          </div>
          <div className="blog_content-text_l">
            <p className="blog_content-text_l-p">
              Больше у нас в <b>блоге</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
