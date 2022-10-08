import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SideShoppingContent } from './components/SideCartInfo/SideShoppingContent';
import { ShoppingCartProvider, useShoppingCart } from './context/ShoppingCartContext';
import { CheckoutPage } from './pages/CheckoutPage';
import { Home } from './pages/Home';
import { ItemDetails } from './pages/ItemDetails';
import { LogIn } from './pages/LogIn';
import { Store } from './pages/Store';

function GlobalComponents() {
  const { isCartOpen, closeCart } = useShoppingCart();

  return <>{isCartOpen && <SideShoppingContent onClose={() => closeCart()} />}</>;
}

function App() {
  return (
    <ShoppingCartProvider>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/product/:id" element={<ItemDetails />} />
            <Route path="/logIn" element={<LogIn />} />
          </Routes>
          <GlobalComponents />
        </BrowserRouter>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
