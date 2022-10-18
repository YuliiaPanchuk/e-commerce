import { Link } from 'react-router-dom';
import { useLoginContext } from '../../context/UserContext';
import { Container } from '../layout/Container/Container';
import { NavBarIcons } from '../NavBarIcons/NavBarIcons';
import './NavBar.css';

export interface NavBarProps {
  isAbsolute?: boolean;
}

function Content() {
  const { loggedIn } = useLoginContext();

  return (
    <nav className="navBarWrapper">
      <ul className="navBarUl">
        <li className="navBarLi">
          <a href="/">Home</a>
        </li>
        <li className="navBarLi">
          <Link to={{ pathname: '/', hash: '#aboutUs' }}>About us</Link>
        </li>
        <li className="navBarLi">
          <Link to={{ pathname: '/', hash: '#news' }}>News</Link>
        </li>
        <li className="navBarLi">
          <Link to="/store">Store</Link>
        </li>
        <div className="navBarIcons">
          <NavBarIcons />
        </div>

        <div>
          <button className="myPageButton">
            {loggedIn ? <Link to="/profile">My page</Link> : ''}
          </button>
        </div>
      </ul>
    </nav>
  );
}

export function NavBar({ isAbsolute }: NavBarProps) {
  if (isAbsolute) {
    return (
      <div className="navBarAbsolute">
        <Content />
      </div>
    );
  }

  return (
    <Container>
      <Content />
    </Container>
  );
}
