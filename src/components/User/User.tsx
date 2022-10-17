import React, { useEffect, useState } from 'react';
import { likedProducts, ProductInfo } from '../../api/product';
import { useLoginContext } from '../../context/UserContext';
import { LogoutButton } from '../LogoutButton/LogoutButton';

export function User() {
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const { user } = useLoginContext();

  useEffect(() => {
    likedProducts(user.name).then((data) => {
      if (Array.isArray(data)) {
        setProducts(data);
      }
    });
  }, [user.name]);

  return (
    <section>
      <LogoutButton />
      <div>{products.map((product) => product.product_name)}</div>
    </section>
  );
}
