import { Helmet } from 'react-helmet';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { BlogContent } from '../components/pageComponents/blog/BlogContent';
import '../styles/blog.css';

export const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <Header />
      <BlogContent />
      <Footer />
    </>
  );
};
