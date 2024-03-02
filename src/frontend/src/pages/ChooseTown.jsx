import { Helmet } from 'react-helmet';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { ChoiceTownContent } from '../components/pageComponents/deliver/ChoiceTownContent';
import '../styles/town.css';

export const ChooseTown = () => {
  return (
    <>
      <Helmet>
        <title>Choose town</title>
      </Helmet>
      <Header />
      <ChoiceTownContent />
      <Footer />
    </>
  );
};
