import React from 'react';
import { useLoginContext } from '../../context/LoginUserContext';

export function LogoutButton() {
  const { signOut } = useLoginContext();

  return (
    <>
      <button onClick={signOut}>Log out</button>
    </>
  );
}
