import { Helmet } from 'react-helmet';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { AboutContent } from '../components/pageComponents/about/AboutContent';
import '../styles/about.css';

export const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Header />
      <AboutContent />
      <Footer />
    </>
  );
};
