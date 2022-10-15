import { Link } from 'react-router-dom';
import { useLoginContext } from '../../context/LoginUserContext';
import { NavBarIcons } from '../NavBarIcons/NavBarIcons';
import './NavBar.css';

export interface NavBarProps {
  isAbsolute?: boolean;
}

export function NavBar({ isAbsolute }: NavBarProps) {
  const classes = [];
  const { loggedIn } = useLoginContext();
  if (isAbsolute) classes.push('navBarAbsolute');

  return (
    <div className={classes.join(' ')}>
      <nav className="navBarWrapper">
        <ul className="navBarUl">
          <li className="navBarLi">
            <a href="/">Home</a>
          </li>
          <li className="navBarLi">
            <Link to={{ pathname: '/', hash: '#aboutUs' }}>About us</Link>
          </li>
          <li className="navBarLi">
            <Link to="/news">News</Link>
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

          <div>
            <button className="myPageButton">
              {loggedIn ? <Link to="/user">My page</Link> : ''}
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
}
