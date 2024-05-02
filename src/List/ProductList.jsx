import React from "react";
import ProductListItem from "./ProductListItem";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="product__list-container">
      <ProductListItem />
      <ProductListItem />
    </div>
  );
};

export default ProductList;
