import { useCallback, useEffect, useRef, useState } from 'react';
import { FetchProductsParams } from '../../../api/product';
import { useLoginContext } from '../../../context/UserContext';
import { Container, ContainerVariant } from '../../layout/Container/Container';
import { SearchBar } from '../SearchBar/SearchBar';
import { SortButton } from '../SortButton/SortButton';
import './SearchSettings.css';

const sortBy = [
  { text: 'Price high to low', value: 'highToLow' },
  { text: 'Price low to high', value: 'lowToHigh' },
  { text: 'Product name A - Z', value: 'fromAtoZ' },
  { text: 'Product name Z - A', value: 'fromZtoA' },
];

export interface SearchSettingsProps {
  productCount: number;
  productTotal: number;

  onSearch: (params: FetchProductsParams) => void;
}

export function SearchSettings({ productCount, productTotal, onSearch }: SearchSettingsProps) {
  const { user } = useLoginContext();

  const [searchValue, setSearchValue] = useState('');
  const [sortByValue, setSortByValue] = useState('fromAtoZ');

  const lastSearchParamsJSON = useRef('');

  const onChange = useCallback(() => {
    const newSearchParams = {
      search: searchValue,
      sortBy: sortByValue,
      username: user.name,
    };

    const newSearchParamsJSON = JSON.stringify(newSearchParams);
    if (newSearchParamsJSON !== lastSearchParamsJSON.current) {
      lastSearchParamsJSON.current = newSearchParamsJSON;
      onSearch && onSearch(newSearchParams);
    }
  }, [onSearch, searchValue, sortByValue, user.name]);

  useEffect(() => onChange(), [onChange, user.name]);

  return (
    <Container variant={ContainerVariant.ProductFilter}>
      <SortButton
        value={sortByValue}
        sortBy={sortBy}
        onChange={(e) => setSortByValue(e.target.value)}
      />
      <SearchBar
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <p>
        Showing {productCount} of {productTotal} products.
      </p>
    </Container>
  );
}
