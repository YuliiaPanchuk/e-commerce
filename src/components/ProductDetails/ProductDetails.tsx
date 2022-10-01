import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, ProductInfo } from '../../api/product';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utilities/formatCurrency';
import { AddBtn } from '../AddBtn/AddBtn';
import { QtyBtn } from '../QtyBtn/QtyBtn';
import './ProductDetails.css';

export function ProductDetails() {
  const params = useParams();
  const [item, setItem] = useState<ProductInfo | null>();
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    getItemQuantity,
    isCartOpen,
    openCart,
    closeCart,
  } = useShoppingCart();

  useEffect(() => {
    const productId = params.id!;

    getProductById(productId).then((data) => {
      setItem(data);
    });
  }, [params.id]);

  function addProductToCart() {
    openCart();
  }

  if (!item) {
    return <p>loading...</p>;
  }
  const quantity = getItemQuantity(item.product_id);

  return (
    <>
      <section className="itemDetailsWrapper">
        <div className="itemDetailsContainer">
          <div className="itemImage">
            <img src={item.image_url} alt="product" />
          </div>

          <div className="itemDetailsRightContainer">
            <div className="itemDetailsHeadline">
              <p className="itemProductName">{item.product_name}</p>
              <p className="itemProductPrice">{formatCurrency(item.product_price)}</p>
            </div>

            <div className="coffeeType">
              <label htmlFor="dringType">Grind: </label>
              <select className="dringType">
                <option value="wholeBeans">Whole Beans</option>
                <option value="espressonGrind">Espresson Grind</option>
                <option value="stovetopGrind">Stovetop Grind</option>
                <option value="plungerGrind">Plunger Grind</option>
              </select>
            </div>

            <div>
              <label htmlFor="coffeeWeight">Weight: </label>
              <select className="coffeeWeight">
                <option value="250g">250g</option>
                <option value="500g">500g</option>
                <option value="1kg">1kg</option>
                <option value="2kg">2kg</option>
              </select>
            </div>

            {quantity === 0 ? (
              <div className="productAddButton">
                <AddBtn
                  addProd={() => addProductToCart()}
                  incrQty={() => increaseCartQuantity(item.product_id)}
                />
              </div>
            ) : (
              <div className="productQuantityButton">
                <QtyBtn
                  decr={() => decreaseCartQuantity(item.product_id)}
                  incr={() => increaseCartQuantity(item.product_id)}
                  quantity={quantity}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
