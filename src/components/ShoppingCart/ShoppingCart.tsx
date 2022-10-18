import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductsById, ProductInfo } from '../../api/product';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utilities/formatCurrency';
import { QtyBtn } from '../QtyBtn/QtyBtn';
import { RemoveBtn } from '../RemoveBtn/RemoveBtn';
import { DoneIcon } from './DoneIcon';
import { LockIcon } from './LockIcon';
import './ShoppingCart.css';

interface ShoppingCartProps {
  products: ProductInfo[];
}

export function ShoppingCart({ products }: ShoppingCartProps) {
  const { cartItems, removeFromCart, decreaseCartQuantity, increaseCartQuantity, getItemQuantity } =
    useShoppingCart();

  const totalPrice = products.reduce(
    (result, item) => result + item.product_price * getItemQuantity(item.product_id),
    0,
  );

  return (
    <div>
      <div className="shoppingCart">
        <div className="shoppingCartContainer">
          <div className="shoppingCartHeader">
            <p className="shoppingCartTitle">My shopping cart</p>
          </div>

          <div className="shoppingCartWhiteBlock">
            <div className="shoppingCartWhiteBlockContent">
              <p>Your items</p>

              <ul className="shoppingCartUl">
                <li>Products</li>
                <li>Qty</li>
                <li>Grind</li>
                <li>Weight</li>
                <li>Price</li>
              </ul>

              {products.map((item) => {
                const quantity = getItemQuantity(item.product_id);
                return (
                  <div>
                    <div key={item.product_id} className="shoppingCartProductWrapper">
                      <div className="shoppingCartImage">
                        <img src={item.image_url} alt="Our product" />
                      </div>

                      <div className="productsSection">
                        <div className="cartProductTittle">
                          <p>{item.product_name}</p>
                        </div>
                        <div className="shoppingRemoveButton">
                          <RemoveBtn onClick={() => removeFromCart(item.product_id)} />
                        </div>
                      </div>

                      <div className="cartProductQtyButton">
                        <QtyBtn
                          decr={() => decreaseCartQuantity(item.product_id)}
                          incr={() => increaseCartQuantity(item.product_id)}
                          quantity={quantity}
                        />
                      </div>

                      <div className="priceSection">
                        <p>
                          {formatCurrency(item.product_price * getItemQuantity(item.product_id))}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="checkoutWrapper">
          <div className="summaryText">
            <p>Summary</p>
          </div>

          <ul className="shippingOptions">
            <li>
              <DoneIcon /> Free home delivery for orders above 300 kr
            </li>
            <li>
              <DoneIcon /> Pick up point near you available
            </li>
            <li>
              <DoneIcon /> Free Click and Collect at our store near you
            </li>
          </ul>

          <div className="subtotal">
            <p>Subtotal</p>
            <p>amout</p>
          </div>

          <div className="shippingProduct">
            <p>Shipping Estimate</p>
            <p>Free</p>
          </div>

          <div className="totalCheckout">
            <p>
              Total <small>(incl. taxes)</small>
            </p>
            <p>{totalPrice}</p>
          </div>

          <Link to="/creditCart">
            <button className="continueToCheckout">Continue to checkout</button>
          </Link>

          <div className="secureCheckout">
            <small>
              <LockIcon /> secure checkout
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
