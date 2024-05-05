import React, { useState } from "react";
import ProductListItem from "./ProductListItem";
import "./ProductList.css";
import ProductFilters from "../Filters/ProductFilters";

const ProductList = ({ productData }) => {
  const [filterChanged, setFilterChanged] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedRange, setSelectedRange] = useState();
  const [selectedStartDate, setSelectedStartDate] = useState();
  const [selectedEndDate, setSelectedEndDate] = useState();

  let filteredData = [...productData];

  //type filtered
  const whenTypeSelected = (type) => {
    setFilterChanged(true);
    setSelectedType(type);
  };
  if (selectedType.length > 0) {
    filteredData = productData.filter((item) => item.type === selectedType);
  }

  //range filtered
  const whenRangeSelected = (range) => {
    setFilterChanged(true);
    setSelectedRange(range);
  };
  if (selectedRange) {
    switch (selectedRange) {
      case "가격 높은 순":
        filteredData.sort((a, b) => b.price - a.price);
        break;
      case "가격 낮은 순":
        filteredData.sort((a, b) => a.price - b.price);
        break;
      case "최신 순":
        filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "오래된 순":
        filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
    }
  }

  //start date filtered
  const whenStartDateSelected = (startDate) => {
    setFilterChanged(true);
    setSelectedStartDate(startDate);
  };
  if (selectedStartDate) {
    filteredData = filteredData.filter(
      (item) => new Date(item.date) >= new Date(selectedStartDate)
    );
  }

  //end date filtered
  const whenEndDateSelected = (endDate) => {
    setFilterChanged(true);
    setSelectedEndDate(endDate);
  };
  if (selectedEndDate) {
    filteredData = filteredData.filter(
      (item) => new Date(item.date) <= new Date(selectedEndDate)
    );
  }

  return (
    <>
      <ProductFilters
        selectedType={selectedType}
        whenTypeSelected={whenTypeSelected}
        selectedRange={selectedRange}
        whenRangeSelected={whenRangeSelected}
        whenStartDateSelected={whenStartDateSelected}
        whenEndDateSelected={whenEndDateSelected}
        setFilterChanged={setFilterChanged}
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
