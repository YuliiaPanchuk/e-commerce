import React, { useEffect, useState } from 'react';
import { getProductsById, ProductInfo } from '../../api/product';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { NavBar } from '../NavBar/NavBar';
import { QtyBtn } from '../QtyBtn/QtyBtn';
import { RemoveBtn } from '../RemoveBtn/RemoveBtn';
import './ShoppingCart.css';

export function ShoppingCart() {
  const { cartItems, removeFromCart, decreaseCartQuantity, increaseCartQuantity, getItemQuantity } =
    useShoppingCart();
  const [product, setProduct] = useState<ProductInfo[]>([]);

  useEffect(() => {
    const product_ids = cartItems.map((item) => item.id);

    getProductsById(product_ids).then((item) => {
      setProduct(item as ProductInfo[]);
    });
  }, [cartItems]);

  return (
    <div>
      {product.map((item) => {
        const quantity = getItemQuantity(item.product_id);
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

                  <ul className="shoppingCartUl">
                    <li>Products</li>
                    <li>Qty</li>
                    <li>Price</li>
                  </ul>

                  <div key={item.product_id} className="shoppingCartProductWrapper">
                    <div className="shoppingCartImage">
                      <img src={item.image_url} alt="Our product" />
                    </div>

                    <div className="productsSection">
                      <p>{item.product_name}</p>
                      <p>{item.product_description}</p>
                      <RemoveBtn onClick={() => removeFromCart(item.product_id)} />
                    </div>

                    <div className="qtyButton">
                      <QtyBtn
                        decr={() => decreaseCartQuantity(item.product_id)}
                        incr={() => increaseCartQuantity(item.product_id)}
                        quantity={quantity}
                      />
                    </div>

                    <div className="priceSection">
                      <p>{ item.product_price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
