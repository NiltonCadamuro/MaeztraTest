export interface Product {
  image: string;
  skus: Sku[];
  name: string;
  price: number;
  description: string;
  price: number;
  link: string;
}

export interface Sku {
  id: string;
  color: string;
}
