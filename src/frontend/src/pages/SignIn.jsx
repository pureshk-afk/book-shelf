import { Helmet } from "react-helmet";
import { Header } from "../components/common/Header";
import { SignInForm } from "../components/pageComponents/signin/SignInForm";

export const SignIn = () => {
  return (
    <>
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <Header />
      <SignInForm />
    </>
  );
};
