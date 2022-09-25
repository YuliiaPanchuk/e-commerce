import { useEffect, useState } from 'react';
import { getProductsById, ProductInfo } from '../api/product';
import { NavBar } from '../components/NavBar/NavBar';
import { ShoppingCart } from '../components/ShoppingCart/ShoppingCart';
import { useShoppingCart } from '../context/ShoppingCartContext';

export function CheckoutPage() {
  const { cartItems } = useShoppingCart();
  const [product, setProduct] = useState<ProductInfo[]>([]);

  useEffect(() => {
    const product_ids = cartItems.map((item) => item.id);

    getProductsById(product_ids).then((item) => {
      setProduct(item as ProductInfo[]);
    });
  }, [cartItems]);

  return (
    <>
      <NavBar />
      <ShoppingCart products={product}/>
    </>
  )
}
