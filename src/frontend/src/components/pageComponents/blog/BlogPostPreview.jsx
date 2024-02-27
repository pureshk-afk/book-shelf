export const BlogPostPreview = ({
  created,
  title,
  subTitle,
  description,
  preview,
}) => {
  return (
    <div className='post'>
      <div className='post-content'>
        <div className='data'>
          <h5>{created}</h5>
        </div>
        <div className='main_text'>
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
        </div>
        <div className='opisanie'>
          <p>{description}</p>
        </div>
        <img src={preview} />
      </div>
    </div>
  );
};
