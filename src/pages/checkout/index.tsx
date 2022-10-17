import { useEffect, useState } from 'react';
import { getProductsById, ProductInfo } from '../../api/product';
import { LogoutButton } from '../../components/LogoutButton/LogoutButton';
import { NavBar } from '../../components/NavBar/NavBar';
import { ShoppingCart } from '../../components/ShoppingCart/ShoppingCart';
import { useShoppingCart } from '../../context/ShoppingCartContext';

export function CheckoutIndex() {
  const { cartItems } = useShoppingCart();
  const [productsCart, setProduct] = useState<ProductInfo[]>([]);

  useEffect(() => {
    const product_ids = cartItems.map((item) => item.id);

    getProductsById(product_ids).then((item) => {
      setProduct(item as ProductInfo[]);
    });
  }, [cartItems]);

  return (
    <>
      <NavBar />
      <LogoutButton />
      <ShoppingCart products={productsCart} />
    </>
  );
}
