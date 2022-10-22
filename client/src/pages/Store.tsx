import { useCallback, useState } from 'react';
import { apiFetchProducts, FetchProductsParams, ProductInfo } from '../api/product';
import { Footer } from '../components/Footer/Footer';
import { Container, ContainerVariant } from '../components/layout/Container/Container';
import { NavBar } from '../components/NavBar/NavBar';
import { ProductCard } from '../components/product/ProductCard/ProductCard';
import { UppBtn } from '../components/ScrollButton/UppBtn';
import { SearchSettings } from '../components/product/SearchSettings/SearchSettings';

export function Store() {
  const [productCount, setProductCount] = useState({ total: 0, count: 0 });
  const [products, setProducts] = useState<ProductInfo[]>([]);

  // fetch the products with filters
  const fetchProducts = useCallback((params: FetchProductsParams) => {
    apiFetchProducts(params)
      .then((response) => {
        setProductCount({ total: response.total, count: response.count });
        setProducts(response.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <NavBar />

      <Container UNSAFE_style={{ alignItems: 'center' }}>
        <SearchSettings
          productCount={productCount.count}
          productTotal={productCount.total}
          onSearch={(params) => {
            fetchProducts(params);
          }}
        />

        <Container variant={ContainerVariant.Products}>
          {products.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </Container>
      </Container>

      <UppBtn />
      <Footer />
    </>
  );
}
