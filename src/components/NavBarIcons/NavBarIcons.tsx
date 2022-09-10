import React from "react"
import { ShoppingIcon } from './ShoppingIcon';
import { UserProfile } from './UserProfile';
import "./icons.css"
import { useShoppingCart } from '../../context/ShoppingCartContext';

export function NavBarIcons() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <div className="iconsNavBarWrapper">
      <ul className="iconNavBarUl">
        <li>
            <button
              onClick={openCart}
              style={{ width: '3rem', height: '2rem', position: 'relative' }}
              className="navbarIconBtn"
            >
              <ShoppingIcon />
              <div
                style={{
                  color: 'black',
                  width: '1rem',
                  height: '1rem',
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  transform: 'translate(-15%, -60%)'
                }}>
                {cartQuantity}
              </div>
            </button>
         
        </li>
        <li>
          <button className="navbarIconBtn">
            <UserProfile />
          </button>
        </li>
      </ul>
    </div>
  );
}
