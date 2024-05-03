// import './App.css';

import { useState } from "react";
import Filter from "./Filter/ProductFilters";
import ProductForm from "./Form/ProductForm";
import ProductList from "./List/ProductList";

function App() {
  const [productData, setProductData] = useState([]);

  const addProductData = (newProduct) => {
    setProductData((prevData) =>
      [...prevData, newProduct]);
  };

  return (
    <>
      <ProductForm addProductData={addProductData} />
      <Filter />
      <ProductList productData={productData} />
    </>
  );
}

export default App;
