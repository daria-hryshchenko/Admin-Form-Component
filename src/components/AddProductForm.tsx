import { ChangeEvent, FC, FormEvent, useState } from 'react';
import '../App.css';
import Product from './../models/Product';

interface addProductFormProps {
  addProduct: (newProduct: Product) => void;
}

const initState = {
  title: '',
  price: '',
  img: '',
};

const AddProductForm: FC<addProductFormProps> = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState<{ title: string; price: string; img: string }>(
    initState,
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = newProduct;
    if (title && price && img) {
      addProduct({ title, price: Number(price), img, id: Date.now() });
      setNewProduct(initState);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Product Name"
        onChange={handleChange}
        value={newProduct.title}></input>
      <input
        name="price"
        type="text"
        placeholder="Price"
        onChange={handleChange}
        value={newProduct.price}></input>
      <input
        name="img"
        type="text"
        placeholder="Image"
        onChange={handleChange}
        value={newProduct.img}></input>
      <button type="submit">+ Add Product</button>
    </form>
  );
};

export default AddProductForm;
