const API_ENDPOINT = 'http://localhost:3001';

export type ProductInfo = {
  product_id: string;
  image_url: string;
  product_short_description: string;
  product_description: string;
  product_name: string;
  product_price: number;
  product_link: string;
  user_liked?: boolean;
};

export interface FetchProductsParams {
  search: string;
  sortBy: string;
  username: string;
}

export interface FetchProductsResult {
  total: number;
  count: number;
  items: ProductInfo[];
}

// Getting products data from database
export async function apiFetchProducts(
  queryParams: FetchProductsParams,
): Promise<FetchProductsResult> {
  // build the url query params "?search=mysearch"
  const query = Object.keys(queryParams)
    .map(
      (k) =>
        `${encodeURIComponent(k)}=${encodeURIComponent(
          queryParams[k as keyof FetchProductsParams],
        )}`,
    )
    .join('&');

  const url = API_ENDPOINT + '/product?' + query;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return {
    total: data.total,
    count: data.count,
    items: data.items.map((x: any) => {
      return {
        product_id: x.id,
        image_url: x.image_url,
        product_short_description: x.short_description,
        product_description: x.description,
        product_name: x.name,
        product_price: Number(x.price),
        product_link: x.link,
        user_liked: x.user_liked,
      };
    }),
  };
}

// Getting info about the product
export async function getProductById(product_id: string): Promise<ProductInfo | null> {
  const url = API_ENDPOINT + '/product/' + product_id;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status !== 200) {
    return null;
  }

  const x = await response.json();
  return {
    product_id,
    image_url: x.image_url,
    product_short_description: x.short_description,
    product_description: x.description,
    product_name: x.name,
    product_price: Number(x.price),
    product_link: x.link,
  };
}

export async function getProductsById(product_ids: string[]) {
  return Promise.all(product_ids.map((item) => getProductById(item))).then((data) =>
    data.filter((x) => !!x),
  );
}

export async function likeProduct(
  username: string,
  productId: string,
  liked: boolean,
): Promise<boolean> {
  const url = API_ENDPOINT + '/product/like';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      productId,
      like: liked,
    }),
  });

  return response.status === 200;
}

export async function apiLikedProducts(username: string): Promise<ProductInfo[]> {
  const url = API_ENDPOINT + '/product/liked';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
    }),
  });

  const data = await response.json();
  return data.map((x: any) => ({
    product_id: x.id,
    image_url: x.image_url,
    product_short_description: x.short_description,
    product_description: x.description,
    product_name: x.name,
    product_price: Number(x.price),
    product_link: x.link,
    user_liked: x.user_liked,
  }));
}
