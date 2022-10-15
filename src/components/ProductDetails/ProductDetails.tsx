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
  const [option, setOption] = useState();
  const [optionWeight, setOptionWeight] = useState();
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    getItemQuantity,
    isCartOpen,
    openCart,
    closeCart,
  } = useShoppingCart();

  const optionsGrind = [
    { value: 'wholeBeans', text: 'Whole Beans' },
    { value: 'espressonGrind', text: 'Espresson Grind' },
    { value: 'stovetopGrind', text: 'Stovetop Grind' },
    { value: 'plungerGrind', text: 'Plunger Grind' },
  ];

  const optionsWeight = [
    { value: '250g', text: '250g' },
    { value: '500g', text: '500g' },
    { value: '1kg', text: '1kg' },
    { value: '2kg', text: '2kg' },
  ];

  useEffect(() => {
    const productId = params.id!;

    getProductById(productId).then((data) => {
      setItem(data);
    });
  }, [params.id]);

  function addProductToCart() {
    openCart();
  }

  const handleGrindSelect = (event: any) => {
    setOption(event.target.value);
  };

  const handkeWeightSelect = (event: any) => {
    setOptionWeight(event.target.value);
  };

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
              <label htmlFor="coffeeBeans" className="coffeeBeansLabel">
                Grind:
              </label>
              <select className="coffeeBeans" onChange={handleGrindSelect} value={option}>
                {optionsGrind.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>

            <div className="weight">
              <label htmlFor="coffeeWeight" className="coffeeWeightLabel">
                Weight:
              </label>
              <select className="coffeeWeight" onChange={handkeWeightSelect} value={optionWeight}>
                {optionsWeight.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p>Grind: {option}</p>
              <p>You select weight: {optionWeight}</p>
            </div>

            {quantity === 0 ? (
              <div className="productDetailsAddButton">
                <AddBtn
                  addProd={() => addProductToCart()}
                  incrQty={() => increaseCartQuantity(item.product_id)}
                />
              </div>
            ) : (
              <div className="productDetailsQuantityButton">
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
