import React from 'react';
import { Footer } from '../../components/Footer/Footer';
import { NavBar } from '../../components/NavBar/NavBar';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails';

export function ProductIndex() {
  return (
    <>
      <NavBar />
      <ProductDetails />
      <Footer />
    </>
  );
}
