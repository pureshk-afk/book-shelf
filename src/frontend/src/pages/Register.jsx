import { Helmet } from 'react-helmet';
import { Header } from '../components/common/Header';
import { RegisterForm } from '../components/pageComponents/register/RegisterForm';

export const Register = () => {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Header />
      <RegisterForm />
    </>
  );
};
