import { FC } from 'react';
import Product from '../models/Product';
import SingleProduct from './SingleProduct';

interface DisplayProductsProps {
  productList: Product[];
  updateProduct: (newProduct: Product) => void;
  deleteProduct: (id: number) => void;
}
const DisplayProducts: FC<DisplayProductsProps> = ({
  productList,
  updateProduct,
  deleteProduct,
}) => {
  return (
    <div className="container">
      {productList.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            updateProduct={updateProduct}
            product={product}
            deleteProduct={deleteProduct}
          />
        );
      })}
    </div>
  );
};

export default DisplayProducts;
