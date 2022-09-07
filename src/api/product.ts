// The base path to Firebase
const FIREBASE_URL = 'https://firestore.googleapis.com/v1';

// The parent resource for firebase
const PARENT = 'projects/e-commerce-f60a8/databases/(default)/documents';

const COLLECTION_ID = 'products';

export type ProductInfo = {
  product_id: string;
  image_url: string;
  product_description: string;
  product_name: string;
  product_price: number;
  product_link: string;
}

// Getting products data from database
export async function fetchProducts() {
  const response = await fetch(`${FIREBASE_URL}/${PARENT}/${COLLECTION_ID}`);
  const data = await response.json();
  return data.documents.map(
    (x: any) => {
      let product_id = x.name.split('/').pop();

      return {
        product_id,
        image_url: x.fields.image_url.stringValue,
        product_description: x.fields.product_description.stringValue,
        product_name: x.fields.product_name.stringValue,
        product_price: x.fields.product_price.stringValue,
        product_link: x.fields.product_link.stringValue,
      };
    },
  );
}

// Getting info about the product
export async function getProductById(product_id: string): Promise<ProductInfo | null> {
  const response = await fetch(`${FIREBASE_URL}/${PARENT}/${COLLECTION_ID}/${product_id}`)
  const data = await response.json();

  if (response.status !== 200) {
    return null;
  }
  
  return {
    product_id,
    image_url: data.fields.image_url.stringValue,
    product_description: data.fields.product_description.stringValue,
    product_name: data.fields.product_name.stringValue,
    product_price: data.fields.product_price.stringValue,
    product_link: data.fields.product_link.stringValue,
  };
  
} 

export async function getProductsById(product_ids: string[]) {
  return Promise.all(product_ids.map(item => getProductById(item)))
}

// https://firestore.googleapis.com/v1/projects/e-commerce-f60a8/databases/(default)/documents/products
