import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../api/auth/AuthUtils';

export const CheckAuth = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    useAuthentication().then((r) => {
      if (!r) navigate('/signin');
      return;
    });
  });

  return <>{children}</>;
};
