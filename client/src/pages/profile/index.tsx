import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiLikedProducts, ProductInfo } from '../../api/product';
import { Footer } from '../../components/Footer/Footer';
import { Container, ContainerVariant } from '../../components/layout/Container/Container';
import { Section } from '../../components/layout/Section/Section';
import { LogoutButton } from '../../components/LogoutButton/LogoutButton';
import { NavBar } from '../../components/NavBar/NavBar';
import { ProductCard } from '../../components/product/ProductCard/ProductCard';
import { useLoginContext } from '../../context/UserContext';

export function UserIndex() {
  const { loggedIn, user } = useLoginContext();
  const navigate = useNavigate();

  const [products, setProducts] = useState<ProductInfo[]>([]);

  // redirect if the user is already logged in
  useEffect(() => {
    if (!loggedIn) {
      navigate('/');
    }
  }, [loggedIn, navigate]);

  useEffect(() => {
    if (user.name) {
      apiLikedProducts(user.name).then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        }
      });
    }
  }, [user.name]);

  return (
    <>
      <NavBar />

      <div>
        <Container>
          <LogoutButton />
        </Container>

        <Container>
          <Section title="My Liked Products">
            <Container variant={ContainerVariant.Products}>
              {products.map((product) => (
                <ProductCard key={product.product_id} product={product} />
              ))}
            </Container>
          </Section>
        </Container>
      </div>

      <Footer />
    </>
  );
}
