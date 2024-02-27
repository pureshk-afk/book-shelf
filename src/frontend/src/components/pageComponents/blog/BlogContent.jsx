import { useEffect, useState } from 'react';
import { fetchPosts } from '../../../api/payload/LoadingData';
import { BlogPostPreview } from './BlogPostPreview';

export const BlogContent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((r) => setPosts(r.results));
  }, []);

  return (
    <div className='container_position-post'>
      {posts.map((post) => (
        <BlogPostPreview
          key={post.id}
          created={post.created}
          title={post.title}
          preview={post.preview}
          description={post.description}
          subTitle={post.subtitle}
        />
      ))}
    </div>
  );
};
