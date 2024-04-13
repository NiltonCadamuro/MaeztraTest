import { Product } from "./types";

const ProductSummary = ({ product }: Product) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductSummary;