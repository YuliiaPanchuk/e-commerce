import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts, likeProduct, ProductInfo } from '../../api/product';
import { useLoginContext } from '../../context/UserContext';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utilities/formatCurrency';
import { AddBtn } from '../AddBtn/AddBtn';
import { QtyBtn } from '../QtyBtn/QtyBtn';
import { LikeIcon } from './LikeIcon';
import './ProductCart.css';

interface productCartInfgProps {
  product: ProductInfo;
}

function ProductCartInfo({ product }: productCartInfgProps) {
  const [isLiked, setIsLiked] = useState(false);
  const { loggedIn, user } = useLoginContext();
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, openCart } =
    useShoppingCart();
  const quantity = getItemQuantity(product.product_id);

  function addProductToCart() {
    openCart();
  }

  return (
    <>
      <div key={product.product_id} className="productWrapper">
        <div className="likeIcon">
          <button
            className="likeIconButton"
            onClick={() => {
              setIsLiked(!isLiked);
              likeProduct(user.name, product.product_id, !isLiked);
            }}
          >
            {loggedIn ? <LikeIcon isLiked={isLiked} /> : ''}
          </button>
        </div>

        <div className="imageWrapper">
          <Link to={`/product/${product.product_id}`}>
            <img className="productImage" src={product.image_url} alt="Displaying product" />
          </Link>
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
    </>
  );
}

export function ProductCart() {
  const [product, setProduct] = useState<ProductInfo[]>([]);

  const displayProducts = async () => {
    const response = await fetchProducts();

    setProduct(response);
  };

  useEffect(() => {
    displayProducts();
  }, []);

  return (
    <div>
      <div className="productContainer">
        {product.map((product) => (
          <ProductCartInfo product={product} />
        ))}
      </div>
    </div>
  );
}
