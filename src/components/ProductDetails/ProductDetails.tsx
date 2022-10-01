import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, ProductInfo } from '../../api/product';
import { formatCurrency } from '../../utilities/formatCurrency';
import './ProductDetails.css';

export function ProductDetails() {
  const params = useParams();
  const [item, setItem] = useState<ProductInfo | null>()

  useEffect(() => {
    const productId = params.id!

    getProductById(productId).then((data) => {
      setItem(data)
    })
  }, [params.id])

  if (!item) { 
    return <p>loading...</p>
  }

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
              <button className="wholeBeansType">whole beans</button>
              <button className="groundType">ground</button>
            </div>

            <div>drop down menu with coffee size</div>

            <div>qtyButtoon here</div>

            <div>add button here</div>
          </div>
        </div>
      </section>
    </>
  );
}
