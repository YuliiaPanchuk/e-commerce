import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../../context/UserContext';

export function LogoutButton() {
  const { user, signOut } = useLoginContext();
  const navigate = useNavigate();

  function onLogout() {
    signOut();
    alert('Logged out');
    navigate('/');
  }

  return (
    <>
      name: {user.name}
      <button onClick={onLogout}>Log out</button>
    </>
  );
}
