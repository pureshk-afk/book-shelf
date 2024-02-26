import { Helmet } from "react-helmet";
import { Header } from "../components/common/Header";
import { HomepageContent } from "../components/pageComponents/homepage/HomepageContent";
import "../styles/homepage.css";

export const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <Header />
      <HomepageContent />
    </>
  );
};
