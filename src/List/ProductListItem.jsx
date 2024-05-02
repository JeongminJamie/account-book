import React from "react";
import "./ProductListItem.css";

const ProductListItem = () => {
  return (
    <div className="product__items-container">
      <div className="product__date">구입 날짜</div>
      <div className="product__name-type">
        <div className="product__name">이름</div>
        <div>유형</div>
      </div>
      <div className="product__memo">메모</div>
      <div className="product__repurchase">재구매 의사</div>

      <div className="product__price">가격</div>
    </div>
  );
};

export default ProductListItem;
