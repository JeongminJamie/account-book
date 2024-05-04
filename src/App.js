import { useState } from "react";
import ProductForm from "./Form/ProductForm";
import ProductList from "./List/ProductList";

function App() {
  const [productData, setProductData] = useState([]);

  const addProductData = (newProduct) => {
    setProductData((prevData) => [...prevData, newProduct]);
  };

  return (
    <>
      <ProductForm addProductData={addProductData} />
      <ProductList productData={productData} />
    </>
  );
}

export default App;
