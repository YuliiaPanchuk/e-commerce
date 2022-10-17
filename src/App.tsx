import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { SideShoppingContent } from './components/SideCartInfo/SideShoppingContent';
import { UserProvider } from './context/UserContext';
import { ShoppingCartProvider, useShoppingCart } from './context/ShoppingCartContext';
import { CheckoutIndex } from './pages/checkout';
import { Home } from './pages/Home';
import { ProductIndex } from './pages/product';
import { UserIndex } from './pages/profile';
import { Login } from './pages/user';
import { Register } from './pages/user/Register';
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

function AppRouter() {
  const { isCartOpen, closeCart } = useShoppingCart();
  useScrollToLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* product pages */}
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<ProductIndex />} />

        {/* checkout pages */}
        <Route path="/checkout" element={<CheckoutIndex />} />

        {/* user pages */}
        <Route path="/user" element={<Login />} />
        <Route path="/user/register" element={<Register />} />

        {/* profile pages */}
        <Route path="/profile" element={<UserIndex />} />
      </Routes>

      {isCartOpen && <SideShoppingContent onClose={() => closeCart()} />}
    </>
  );
}

export function App() {
  return (
    <UserProvider>
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ShoppingCartProvider>
    </UserProvider>
  );
}
