import { useState } from 'react';
import { ShoppingIcon } from './ShoppingIcon';
import { UserProfile } from './UserProfile';
import "./icons.css"

export function NavBarIcons() {
  const [showEmptyCart, setShowEmptyCart] = useState(false);

  function handleShoppingIcon() {
    setShowEmptyCart(true);
  }

  return (
    <div className="iconsNavBarWrapper">
      <ul className="iconNavBarUl">
        <li>
          <button className="navbarIconBtn" onClick={handleShoppingIcon}>
            <ShoppingIcon />
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
