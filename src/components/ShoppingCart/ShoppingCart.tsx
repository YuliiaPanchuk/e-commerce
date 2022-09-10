import React, { useEffect, useState } from 'react';
import { getProductsById, ProductInfo } from '../../api/product';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { NavBar } from '../NavBar/NavBar';

export function ShoppingCart() {
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
      <div className="shoppingCart">
        <div className="shoppingCartContainer">
          <div className="shoppingCartHeader">
            <p className="shoppingCartTitle">My shopping cart</p>
          </div>

          <div className="shoppingCartWhiteBlock">
            <p>Your items</p>

            <ul>
              <li>Products</li>
              <li>Qty</li>
              <li>Price</li>
            </ul>

            <>
              {product.map((item) => (
                <div key={item.product_id} className="shoppingCartProductWrapper">
                  <img src={item.image_url} alt="something" />
                  <p>{item.product_name}</p>
                </div>
              ))}
            </>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
