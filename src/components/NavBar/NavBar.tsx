import { Link } from 'react-router-dom';
import { NavBarIcons } from '../NavBarIcons/NavBarIcons';
import './NavBar.css';

export interface NavBarProps {
  isAbsolute?: boolean;
}

export function NavBar({ isAbsolute }: NavBarProps) {
  const classes = [];
  if (isAbsolute) classes.push('navBarAbsolute');

  return (
    <div className={classes.join(' ')}>
      <nav className="navBarWrapper">
        <ul className="navBarUl">
          <li className="navBarLi">
            <a href="/">Home</a>
          </li>
          <li className="navBarLi">
            <a href="#aboutUs">About us</a>
          </li>
          <li className="navBarLi">
            <a href="#news">News</a>
          </li>
          <li className="navBarLi">
            <Link to="/store">Store</Link>
          </li>
          <li className="navBarLi">
            <a href="#contact">Contact</a>
          </li>
          <div className="navBarIcons">
            <NavBarIcons />
          </div>
        </ul>
      </nav>
    </div>
  );
}
