import React from "react";
import "./ProductForm.css";

const ProductForm = () => {
  return (
    <div className="form-container">
      <div className="name__input">
        <label for="name" className="name__label">
          이름
        </label>
        <input id="name" type="text" />
      </div>
      <div className="price__input">
        <label for="price" className="price__label" type="number">
          가격
        </label>
        <input id="price" />
      </div>
      <div className="type__input">
        <label for="type" className="type__label" type="text">
          유형
        </label>
        <input id="type" />
      </div>
      <div className="purchase-date__input">
        <label for="purchase-date" className="purchase-date__label">
          구입 날짜
        </label>
        <input id="purchase-date" type="date" />
      </div>
      <div className="memo__input">
        <label className="memo__label">메모</label>
        <input id="memo" type="checkbox" className="memo__checkbox" />
        <label for="memo">메모 작성</label>
        <input className="memo__checkbox-input" />
      </div>
      <div className="repurchase__input">
        <label className="repurchase__label">재구매 의사</label>
        <input
          id="do-repurchase"
          type="radio"
          className="do-repurchase-input"
        />
        <label for="do-repurchase">한다</label>
        <input
          id="dont-repurchase"
          type="radio"
          className="dont-repurchase-input"
        />
        <label for="dont-repurchase">안 한다</label>
      </div>
    </div>
  );
};

export default ProductForm;
