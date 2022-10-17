const API_ENDPOINT = 'http://localhost:3001';

export type ProductInfo = {
  product_id: string;
  image_url: string;
  product_description: string;
  product_name: string;
  product_price: number;
  product_link: string;
};

// Getting products data from database
export async function fetchProducts() {
  const url = API_ENDPOINT + '/product';

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return data.map((x: any) => {
    let product_id = x.name.split('/').pop();

    return {
      product_id,
      image_url: x.image_url,
      product_description: x.description,
      product_name: x.name,
      product_price: Number(x.price),
      product_link: x.link,
    };
  });
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
    product_description: x.description,
    product_name: x.name,
    product_price: Number(x.price),
    product_link: x.link,
  };
}

export async function getProductsById(product_ids: string[]) {
  return Promise.all(product_ids.map((item) => getProductById(item)));
}

export async function likeProduct(
  username: string,
  productId: string,
  liked: boolean,
): Promise<ProductInfo[]> {
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

  const data = await response.json();
  return data;
}

export async function likedProducts(username: string): Promise<ProductInfo[]> {
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
  return data;
}
