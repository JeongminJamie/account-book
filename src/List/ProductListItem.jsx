import React from "react";
import "./ProductListItem.css";

const ProductListItem = ({ date, name, type, memo, repurchase, price }) => {
  console.log("date:", date);
  return (
    <div className="product__items-container">
      <div className="product__date">{date}</div>
      <div className="product__name-type">
        <div className="product__name">{name}</div>
        <div>{type}</div>
      </div>
      <div className="product__memo">{memo}</div>
      <div className="product__repurchase">
        {repurchase ? "재구매 O" : "재구매 X"}
      </div>
      <div className="product__price">{price}</div>
    </div>
  );
};

export default ProductListItem;
