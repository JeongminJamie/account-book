import React, { useState } from "react";
import "./ProductFilters.css";

const ProductFilters = ({
  selectedType,
  whenTypeSelected,
  selectedRange,
  whenRangeSelected,
}) => {
  const typeSelectionHandler = (e) => {
    whenTypeSelected(e.target.value);
  };
  const rangeSelectionHandler = (e) => {
    whenRangeSelected(e.target.value);
  };
  const startDateHandler = () => {};
  const endDateHandler = () => {};
  return (
    <div className="product__filters-container">
      <div>
        <select id="type" value={selectedType} onChange={typeSelectionHandler}>
          <option value="식료품">식료품</option>
          <option value="의류">의류</option>
          <option value="가전 제품">가전 제품</option>
        </select>
      </div>
      <div>
        <select
          id="range"
          value={selectedRange}
          onChange={rangeSelectionHandler}
        >
          <option value="가격 높은 순">가격 높은 순</option>
          <option value="가격 낮은 순">가격 낮은 순</option>
          <option value="최신 순">최신 순</option>
          <option value="오래된 순">오래된 순</option>
        </select>
      </div>
      <div>
        <label>시작 기간</label>
        <input id="start-date" type="date" onChange={startDateHandler} />
      </div>
      <div>
        <label>끝 기간</label>
        <input id="end-date" type="date" onChange={endDateHandler} />
      </div>
    </div>
  );
};

export default ProductFilters;
