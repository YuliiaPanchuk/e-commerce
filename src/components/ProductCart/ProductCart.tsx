import React, { useEffect, useState } from 'react';
import { fetchProducts, ProductInfo } from '../../api/product';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utilities/formatCurrency';
import { AddBtn } from '../AddBtn/AddBtn';
import { QtyBtn } from '../QtyBtn/QtyBtn';
import { RemoveBtn } from '../RemoveBtn/RemoveBtn';
import { SideShoppingContent } from '../SideCartInfo/SideShoppingContent';
import './ProductCart.css';

export function ProductCart() {
  const [product, setProduct] = useState<ProductInfo[]>([]);

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    isCartOpen,
    openCart,
    closeCart,
  } = useShoppingCart();

  const displayProducts = async () => {
    const response = await fetchProducts();

    setProduct(response);
  };

  useEffect(() => {
    displayProducts();
  }, []);

  function addProductToCart() {
    openCart();
  }

  function productCartInfo(product: ProductInfo) {
    const quantity = getItemQuantity(product.product_id);

    return (
      <div key={product.product_id} className="productWrapper">
        <div className="imageWrapper">
          <a href={product.product_link}>
            <img className="productImage" src={product.image_url} alt="Displaying product" />
          </a>
        </div>

        <div className="imageTextWrapper">
          <p className="productName">{product.product_name}</p>
          <p className="productDescription">{product.product_description}</p>
          <p className="productPrice">{formatCurrency(product.product_price)}</p>
        </div>

        {quantity === 0 ? (
          <div className="productAddButton">
            <AddBtn
              addProd={() => addProductToCart()}
              incrQty={() => increaseCartQuantity(product.product_id)}
            />
          </div>
        ) : (
          <div className="productQuantityButton">
            <QtyBtn
              decr={() => decreaseCartQuantity(product.product_id)}
              incr={() => increaseCartQuantity(product.product_id)}
              quantity={quantity}
              />
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      {isCartOpen && <SideShoppingContent onClose={() => closeCart()} />}
      <div className="productContainer">{product.map(productCartInfo)}</div>
    </div>
  );
}
