import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { Home } from './pages/Home';
import { Store } from './pages/Store';

function App() {
  return (
    <ShoppingCartProvider>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/shoppingCart" element={<ShoppingCart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
