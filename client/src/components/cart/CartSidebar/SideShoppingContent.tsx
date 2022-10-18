import React, { useState, useEffect } from 'react';
import { ClosingIcon } from './ClosingIcon';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './SideShoppingContent.css';
import { getProductsById, ProductInfo } from '../../../api/product';
import { useShoppingCart } from '../../../context/ShoppingCartContext';
import { ShoppingCartSide } from '../../ShoppingCartSide/ShoppingCartSide';

type SideShoppingContentProps = {
  onClose: () => void;
};

export function SideShoppingContent({ onClose }: SideShoppingContentProps) {
  const { cartItems, cartQuantity, getItemQuantity } = useShoppingCart();
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const product_ids = cartItems.map((item) => item.id);

    getProductsById(product_ids).then((item) => {
      setProducts(item as ProductInfo[]);
    });
  }, [cartItems]);

  const totalProductsPrice = products.reduce(
    (total, product) => total + product.product_price * getItemQuantity(product.product_id),
    0,
  );

  return (
    <div className="minicartNotEmpty">
      <button className="closeIconButton" onClick={onClose}>
        <ClosingIcon />
      </button>

      <div className="minicartHeader">
        <h1>My shopping cart</h1>
        <p>{cartQuantity} product</p>
        <span className="miniCartAddedInfo">Added to cart</span>
      </div>

      {cartQuantity > 0 ? (
        <>
          {products.map((product) => (
            <ShoppingCartSide key={product.product_id} productItem={product} />
          ))}

          <div className="miniCartFooter">
            <div className="miniCartFooterText">
              <p className="miniCartFooterPiceText">Order total: </p>
              <p className="miniCartFooterPice">{totalProductsPrice}</p>
            </div>

            <div className="miniCartFooterDeliveryText">
              <small>Delivery time 1-3 working days</small>
            </div>

            <div className="miniCartFooterBtn">
              <button className="continueShoppingBtn" onClick={onClose}>
                Continue shopping
              </button>

              <button className="viewCartBtn" onClick={() => navigate('/checkout')}>
                View Cart
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>It is empty</h1>
        </>
      )}
    </div>
  );
}