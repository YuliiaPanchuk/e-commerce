import { ProductInfo } from '../../api/product';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utilities/formatCurrency';

type ShoppingCartSideProps = {
  productItem: ProductInfo;
};

export function ShoppingCartSide({ productItem }: ShoppingCartSideProps) {
  const { getItemQuantity } = useShoppingCart();

  return (
    <div>
      <div className="minicartBody">
        <div className="miniCartImage">
          <img className="miniProductImage" src={productItem.image_url} alt="product look" />
        </div>

        <div className="miniCartSmallTitle">
          <p className="miniCartSmallHeader">The Rituals of Sakura</p>
          <p className="miniCartProductName">
            <a href="/">{productItem.product_name}</a>
          </p>

          <span className="miniCartQuantityLabel">Quantity: </span>
          <span className="miniCartQuantityValue">{getItemQuantity(productItem.product_id)}</span>
        </div>

        <div className="miniCartPrice">
          <p>
            {formatCurrency(productItem.product_price * getItemQuantity(productItem.product_id))}
          </p>
        </div>
      </div>
    </div>
  );
}
