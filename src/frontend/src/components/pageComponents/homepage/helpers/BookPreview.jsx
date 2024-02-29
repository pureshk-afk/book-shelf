import { useEffect, useState } from 'react';
import { fetchPosts } from '../../../../api/payload/LoadingData';

export const BookPreview = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPosts(1, 1).then(({ results }) => {
      if (results.length > 0) {
        setPost(results[0]);
      }
    });
  }, []);

  return (
    <div className='blog container-hp'>
      <div className='blog_content'>
        <img src={post?.preview} />
        <div className='blog_content-text'>
          <div className='blog_content-text_data'>
            <h6>{post?.created}</h6>
          </div>
          <div className='blog_content-text_hader'>
            <h1>{post?.title}</h1>
            <h2>Краткое содержание рассказа</h2>
          </div>

          <div className='blog_content-text_opisanie'>
            <p>{post?.description}</p>
          </div>
          <div className='blog_content-text_l'>
            <p className='blog_content-text_l-p'>
              Больше у нас в <b>блоге</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
