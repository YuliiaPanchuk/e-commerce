import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../../context/UserContext';
import './LogoutButton.css';

export function LogoutButton() {
  const { user, signOut } = useLoginContext();
  const navigate = useNavigate();

  function onLogout() {
    signOut();
    alert('Logged out');
    navigate('/');
  }

  return (
    <div className="logoutButtonWrapper">
      <p> You are logged in as {user.name}</p>
      <button onClick={onLogout} className="logoutButton">
        Log out
      </button>
    </div>
  );
}
