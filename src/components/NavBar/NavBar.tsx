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
            <a href="/">About us</a>
          </li>
          <li className="navBarLi">
            <a href="/">News</a>
          </li>
          <li className="navBarLi">
            <a href="/">Products</a>
          </li>
          <li className="navBarLi">
            <a href="/">Contact</a>
          </li>
          <NavBarIcons />
        </ul>
      </nav>
    </div>
  );
}
