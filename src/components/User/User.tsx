import React, { useEffect, useState } from 'react';
import { likedProducts, ProductInfo } from '../../api/product';
import { useLoginContext } from '../../context/LoginUserContext';
import { LogoutButton } from '../LogoutButton/LogoutButton';
import { ProductCart } from '../ProductCart/ProductCart';

export function User() {
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const { user } = useLoginContext();

  const loadLikedProducts = async () => {
    const response = await likedProducts(user.name);

    setProducts(response);
  };

  useEffect(() => {
    loadLikedProducts();
  }, []);

  return (
    <section>
      <LogoutButton />
      <div>{products.map((product) => product.product_name)}</div>
    </section>
  );
}
