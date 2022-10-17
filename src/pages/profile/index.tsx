import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCart } from '../../components/CreditCart/CreditCart';
import { Footer } from '../../components/Footer/Footer';
import { NavBar } from '../../components/NavBar/NavBar';
import { User } from '../../components/User/User';
import { useLoginContext } from '../../context/UserContext';

export function UserIndex() {
  const { loggedIn } = useLoginContext();
  const navigate = useNavigate();

  // redirect if the user is already logged in
  useEffect(() => {
    if (!loggedIn) {
      navigate('/');
    }
  }, [loggedIn, navigate]);

  return (
    <>
      <NavBar />
      <User />
      <CreditCart />
      <Footer />
    </>
  );
}
