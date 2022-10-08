import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SideShoppingContent } from './components/SideCartInfo/SideShoppingContent';
import { ShoppingCartProvider, useShoppingCart } from './context/ShoppingCartContext';
import { CheckoutPage } from './pages/CheckoutPage';
import { Home } from './pages/Home';
import { ItemDetails } from './pages/ItemDetails';
import { Register } from './pages/Register';
import { Store } from './pages/Store';

function GlobalComponents() {
  const { isCartOpen, closeCart } = useShoppingCart();

  return <>{isCartOpen && <SideShoppingContent onClose={() => closeCart()} />}</>;
}

export function App() {
  return (
    <ShoppingCartProvider>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/product/:id" element={<ItemDetails />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <GlobalComponents />
        </BrowserRouter>
      </div>
    </ShoppingCartProvider>
  );
}

