import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { useLoginContext } from '../../context/UserContext';

export function Login() {
  const { loggedIn } = useLoginContext();
  const navigate = useNavigate();

  // redirect if the user is already logged in
  useEffect(() => {
    if (loggedIn) {
      navigate('/profile');
    }
  }, [loggedIn, navigate]);

  return (
    <>
      <LoginForm />
    </>
  );
}
