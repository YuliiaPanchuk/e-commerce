import { NavBarIcons } from '../NavBarIcons/NavBarIcons';
import './NavBar.css';

export function NavBar() {
  return (
    <div>
      <nav className="navBarWrapper">
        <ul className="navBarUl">
          <li className="navBarLi">
            <a href="/">Home</a>
          </li>
          <li className="navBarLi">
            <a href="/aboutUs">About us</a>
          </li>
          <li className="navBarLi">
            <a href="/news">News</a>
          </li>
          <li className="navBarLi">
            <a href="/store">Store</a>
          </li>
          <li className="navBarLi">
            <a href="/contact">Contact</a>
          </li>
          <NavBarIcons />
        </ul>
      </nav>
    </div>
  );
}
