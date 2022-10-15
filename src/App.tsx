import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { SideShoppingContent } from './components/SideCartInfo/SideShoppingContent';
import { LoginUserProvider } from './context/LoginUserContext';
import { ShoppingCartProvider, useShoppingCart } from './context/ShoppingCartContext';
import { CheckoutPage } from './pages/CheckoutPage';
import { Home } from './pages/Home';
import { ItemDetails } from './pages/ItemDetails';
import { LoggedinUser } from './pages/LoggedinUser';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Store } from './pages/Store';

const useScrollToLocation = () => {
  const scrolledRef = React.useRef(false);
  const { hash } = useLocation();
  const hashRef = React.useRef(hash);

  React.useEffect(() => {
    if (hash) {
      // We want to reset if the hash has changed
      if (hashRef.current !== hash) {
        hashRef.current = hash;
        scrolledRef.current = false;
      }

      // only attempt to scroll if we haven't yet (this could have just reset above if hash changed)
      if (!scrolledRef.current) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          scrolledRef.current = true;
        }
      }
    }
  });
};

function GlobalComponents() {
  const { isCartOpen, closeCart } = useShoppingCart();
  useScrollToLocation();

  return <>{isCartOpen && <SideShoppingContent onClose={() => closeCart()} />}</>;
}

export function App() {
  return (
    <LoginUserProvider>
      <ShoppingCartProvider>
        <div className="app">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/product/:id" element={<ItemDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/user" element={<LoggedinUser />} />
            </Routes>
            <GlobalComponents />
          </BrowserRouter>
        </div>
      </ShoppingCartProvider>
    </LoginUserProvider>
  );
}
