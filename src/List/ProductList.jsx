import React, { useState, useEffect } from "react";
import ProductListItem from "./ProductListItem";
import "./ProductList.css";
import ProductFilters from "../Filters/ProductFilters";

const ProductList = ({ productData }) => {
  const [filterChanged, setFilterChanged] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  let filteredData = [];

  const whenTypeSelected = (type) => {
    setFilterChanged(true);
    setSelectedType(type);
  };
  if (selectedType.length > 0) {
    filteredData = productData.filter((item) => item.type === selectedType);
    console.log(filteredData);
  }

  // const changedRangeHandler = (range) => {
  //   if (range === "가격 높은 순") {
  //     filteredProductData = filteredProductData.sort(
  //       (a, b) => b.price - a.price
  //     );
  //   } else if (range === "가격 낮은 순") {
  //     filteredProductData = filteredProductData.sort(
  //       (a, b) => a.price - b.price
  //     );
  //   } else if (range === "최신 순") {
  //   } else {
  //   }
  // };

  return (
    <>
      <ProductFilters
        selectedType={selectedType}
        whenTypeSelected={whenTypeSelected}
      />
      <div className="product__list-container">
        {!filterChanged ? (
          productData.map((item, index) => (
            <ProductListItem
              key={index}
              date={item.date}
              name={item.name}
              type={item.type}
              memo={item.memo}
              repurchase={item.repurchase}
              price={item.price}
            />
          ))
        ) : filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <ProductListItem
              key={index}
              date={item.date}
              name={item.name}
              type={item.type}
              memo={item.memo}
              repurchase={item.repurchase}
              price={item.price}
            />
          ))
        ) : (
          <p>값이 없습니다</p>
        )}
      </div>
    </>
  );
};

export default ProductList;
