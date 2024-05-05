import React from "react";
import "./ProductFilters.css";

const ProductFilters = ({
  selectedType,
  whenTypeSelected,
  selectedRange,
  whenRangeSelected,
  whenStartDateSelected,
  whenEndDateSelected,
  setFilterChanged,
}) => {
  const typeSelectionHandler = (e) => {
    whenTypeSelected(e.target.value);
  };
  const rangeSelectionHandler = (e) => {
    whenRangeSelected(e.target.value);
  };
  const startDateHandler = (e) => {
    whenStartDateSelected(e.target.value);
  };
  const endDateHandler = (e) => {
    whenEndDateSelected(e.target.value);
  };

  const returnBtnHandler = () => {
    setFilterChanged(false);
  };
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
      <button className="return-button" onClick={returnBtnHandler}>
        되돌리기
      </button>
    </div>
  );
};

export default ProductFilters;
