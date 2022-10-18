import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { likeProduct, ProductInfo } from '../../../api/product';
import { useShoppingCart } from '../../../context/ShoppingCartContext';
import { useLoginContext } from '../../../context/UserContext';
import { formatCurrency } from '../../../utilities/formatCurrency';
import { AddToCart } from '../AddToCart/AddToCart';
import { LikeButton } from '../LikeButton/LikeButton';

import './ProductCard.css';

export interface ProductCardProps {
  product: ProductInfo;
}

export function ProductCard({ product }: ProductCardProps) {
  const { loggedIn, user } = useLoginContext();
  const { getItemQuantity, setCartQuantity, openCart } = useShoppingCart();

  const [isLiked, setIsLiked] = useState(!!product.user_liked);
  const quantity = getItemQuantity(product.product_id);

  useEffect(() => setIsLiked(!!product.user_liked), [product.user_liked]);

  function addProductToCart() {
    openCart();
  }

  function onUserLikeProduct() {
    setIsLiked(!isLiked);
    likeProduct(user.name, product.product_id, !isLiked);
  }

  return (
    <>
      <div key={product.product_id} className="ProductCard">
        {Boolean(loggedIn) && (
          <div className="likeIcon">
            <LikeButton isLiked={isLiked} onClick={onUserLikeProduct} />
          </div>
        )}

        <div className="ProductCard__Image">
          <Link to={`/product/${product.product_id}`}>
            <img src={product.image_url} alt={product.product_short_description} />
          </Link>
        </div>

        <div className="imageTextWrapper">
          <p className="productName">{product.product_name}</p>
          <p className="productDescription">{product.product_short_description}</p>
          <p className="productPrice">{formatCurrency(product.product_price)}</p>
        </div>

        <AddToCart
          count={quantity}
          onChange={(quantity) => {
            setCartQuantity(product.product_id, quantity);
          }}
          onClick={() => {
            addProductToCart();
          }}
        />
      </div>
    </>
  );
}

/**
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
        )} */
