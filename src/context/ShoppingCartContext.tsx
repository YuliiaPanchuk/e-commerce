import React, { createContext, ReactNode, useContext, useState, useEffect, useCallback } from 'react';

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: string;
  quantity: number;
};

type ShoppingCartContex = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: string) => number;
  increaseCartQuantity: (id: string) => void;
  decreaseCartQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  cartQuantity: number; // how many products in ttl
  cartItems: CartItem[];
  isCartOpen: boolean;
};

const ShoppingCartContex = createContext({} as ShoppingCartContex);

export function useShoppingCart() {
  return useContext(ShoppingCartContex);
}

// initial value for the cartItems
function dataFromLocalStorage() {
  const data = localStorage.getItem('shopping cart');
  if (data) {
    try {
      const json = JSON.parse(data);
      return json
    } catch (error) { }
  }
  return []
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(dataFromLocalStorage);

  // when the user has many tab opens from the store, the data updates in each of it
  const onStorageChanged = useCallback(() => {
    setCartItems(dataFromLocalStorage())
  }, [])
  
  useEffect(() => {
    window.addEventListener("storage", onStorageChanged)
    return function () {
      window.removeEventListener("storage", onStorageChanged)
    };
  }, [onStorageChanged]);

  // updates each time when cartItems updates
  useEffect(() => {
    if (cartItems) {
      localStorage.setItem('shopping cart', JSON.stringify(cartItems))
    }
  }, [cartItems])

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: string) {
    setCartItems((curItems) => {
      return curItems.filter((item) => item.id !== id);
    });
  }

  /*
      function totalProductsPrice() {
    const { getItemQuantity } = useShoppingCart();
    const [products, setProducts] = useState<ProductInfo[]>([]);

    products.reduce(
      (total, product) => total + product.product_price * getItemQuantity(product.product_id),
      0,
    );
  }  
  */

  return (
    <ShoppingCartContex.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
        isCartOpen: isOpen,
      }}
    >
      {children}
    </ShoppingCartContex.Provider>
  );
}
