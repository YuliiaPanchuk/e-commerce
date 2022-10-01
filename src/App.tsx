import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LogInForm } from './components/LogInForm/LogInForm';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { CheckoutPage } from './pages/CheckoutPage';
import { Home } from './pages/Home';
import { ItemDetails } from './pages/ItemDetails';
import { Store } from './pages/Store';

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
            <Route path='/logIn' element={<LogInForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
