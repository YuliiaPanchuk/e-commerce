import { Link } from 'react-router-dom';
import { ProductInfo } from '../../api/product';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utilities/formatCurrency';
import { ClosingIcon } from '../SideCartInfo/ClosingIcon';

type ShoppingCartSideProps = {
  productItem: ProductInfo;
};

export function ShoppingCartSide({ productItem }: ShoppingCartSideProps) {
  const { getItemQuantity } = useShoppingCart();

  return (
    <div>
      <div className="minicartBody">
        <div className="miniCartImage">
          <Link to={`/product/${productItem.product_id}`}> <img className="miniProductImage" src={productItem.image_url} alt="product look" /> </Link>
        </div>

        <div className="miniCartSmallTitle">
          <p className="miniCartSmallHeader">The Rituals of Sakura</p>
          <p className="miniCartProductName"> {productItem.product_name} </p>

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
