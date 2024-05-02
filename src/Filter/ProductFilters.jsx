import React from "react";
import "./ProductFilters.css";

const ProductFilters = () => {
  return (
    <div className="product__filters-container">
      <div>
        <select value="유형"></select>
      </div>
      <div>
        <select value="정렬 기준"></select>
      </div>
      <div>
        <select value="정렬 기준"></select>
      </div>
      <div>
        <select value="정렬 기준"></select>
      </div>
    </div>
  );
};

export default ProductFilters;
