import React from "react";
import ProductListItem from "./ProductListItem";
import "./ProductList.css";

const ProductList = ({ productData }) => {
  return (
    <div className="product__list-container">
      {productData.map((productItem) => (
        <ProductListItem
          date={productItem.date}
          name={productItem.name}
          type={productItem.type}
          memo={productItem.memo}
          repurchase={productItem.repurchase}
          price={productItem.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
