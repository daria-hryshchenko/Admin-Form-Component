import { ChangeEvent, FC, FormEvent, useState } from 'react';
import '../App.css';
import Product from './../models/Product';

interface EditProductFormProps {
  data: Product;
  updateProduct: (newProduct: Product) => void;
  handleToggleEdit: () => void;
}

const EditProductForm: FC<EditProductFormProps> = ({ data, updateProduct, handleToggleEdit }) => {
  const [editProduct, setEditProduct] = useState<Product>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditProduct({ ...editProduct, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = editProduct;
    if (title && price && img) {
      updateProduct(editProduct);
      handleToggleEdit();
    }
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Product Name"
        onChange={handleChange}
        value={editProduct.title}></input>
      <input
        name="price"
        type="text"
        placeholder="Price"
        onChange={handleChange}
        value={editProduct.price}></input>
      <input
        name="img"
        type="file"
        placeholder="Image"
        onChange={handleChange}
        value={editProduct.img}></input>
      <button type="submit">Confirm</button>
    </form>
  );
};

export default EditProductForm;
