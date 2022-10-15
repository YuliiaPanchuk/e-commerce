import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { NavBar } from '../components/NavBar/NavBar';
import { User } from '../components/User/User';

export function LoggedinUser() {
  return (
    <>
      <NavBar />
      <User />
      <Footer />
    </>
  );
}
