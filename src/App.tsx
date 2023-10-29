import { FC, useState } from 'react';
import AddProductForm from './components/AddProductForm';
import DisplayProducts from './components/DisplayProducts';
import Product from './models/Product';
import './App.css';

const App: FC = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  const addProduct = (newProduct: Product) => {
    setProductList([...productList, newProduct]);
  };

  const updateProduct = (newProduct: Product) => {
    setProductList(
      productList.map((product) => (product.id === newProduct.id ? newProduct : product)),
    );
  };

  const deleteProduct = (id: number) => {
    const newProductList = productList.filter((product) => product.id !== id);
    setProductList(newProductList);
  };

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Product List</span>
        <AddProductForm addProduct={addProduct} />
        <DisplayProducts
          productList={productList}
          updateProduct={updateProduct}
          deleteProduct={deleteProduct}
        />
      </div>
    </div>
  );
};

export default App;
