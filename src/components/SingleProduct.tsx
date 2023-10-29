import { FC, useState } from 'react';
import Product from '../models/Product';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import EditProductForm from './EditProductForm';

interface SingleProductProps {
  product: Product;
  updateProduct: (newProduct: Product) => void;
  deleteProduct: (id: number) => void;
}

const SingleProduct: FC<SingleProductProps> = ({ product, updateProduct, deleteProduct }) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleToggleEdit = () => {
    setEdit(!edit);
  };

  const handleDelete = () => {
    deleteProduct(product.id);
  };

  return (
    <div className="product">
      <img src={`/public/${product.img}`} alt={product.title} />
      <h2>{product.title}</h2>
      <span>{product.price} $</span>
      <div className="product-controls">
        <AiFillEdit onClick={handleToggleEdit} />
        <AiFillDelete onClick={handleDelete} />
      </div>

      {edit ? (
        <EditProductForm
          data={product}
          updateProduct={updateProduct}
          handleToggleEdit={handleToggleEdit}
        />
      ) : null}
    </div>
  );
};

export default SingleProduct;
