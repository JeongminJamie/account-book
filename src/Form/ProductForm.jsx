import React from "react";
import { useState } from "react";
import "./ProductForm.css";

const ProductForm = () => {
  const [productObject, setProductObject] = useState({
    name: "",
    price: 0,
    type: "",
    date: new Date(),
    memo: "",
    repurchase: false,
  });
  const submitBtnHandler = (e) => {};
  const nameInputHandler = (e) => {
    setProductObject((prevState) => ({
      ...prevState,
      name: e.target.value(),
    }));
  };
  const priceInputHandler = (e) => {
    setProductObject((prevState) => ({
      ...prevState,
      price: e.target.value(),
    }));
  };
  const typeInputHandler = (e) => {
    setProductObject((prevState) => ({
      ...prevState,
      type: e.target.value(),
    }));
  };
  const dateInputHandler = (e) => {
    setProductObject((prevState) => ({
      ...prevState,
      date: e.target.value(),
    }));
  };
  const memoInputHandler = (e) => {
    setProductObject((prevState) => ({
      ...prevState,
      memo: e.target.value(),
    }));
  };

  return (
    <form className="form-container" onClick={submitBtnHandler}>
      <div className="name__input">
        <label for="name" className="name__label">
          이름
        </label>
        <input
          id="name"
          type="text"
          value={productObject.name}
          onChange={nameInputHandler}
        />
      </div>
      <div className="price__input">
        <label for="price" className="price__label" type="number">
          가격
        </label>
        <input
          id="price"
          value={productObject.price}
          onChange={priceInputHandler}
        />
      </div>
      <div className="type__input">
        <label for="type" className="type__label" type="text">
          유형
        </label>
        <input
          id="type"
          value={productObject.price}
          onChange={typeInputHandler}
        />
      </div>
      <div className="purchase-date__input">
        <label for="purchase-date" className="purchase-date__label">
          구입 날짜
        </label>
        <input
          id="purchase-date"
          type="date"
          value={productObject.price}
          onChange={dateInputHandler}
        />
      </div>
      <div className="memo__input">
        <label className="memo__label">메모</label>
        <input id="memo" type="checkbox" className="memo__checkbox" />
        <label for="memo">메모 작성</label>
        <input
          className="memo__checkbox-input"
          value={productObject.price}
          onChange={memoInputHandler}
        />
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
      <button type="submit">추가</button>
    </form>
  );
};

export default ProductForm;
