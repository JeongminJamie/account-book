import React from "react";
import { useState } from "react";
import "./ProductForm.css";

const ProductForm = ({ addProductData }) => {
  const [productObject, setProductObject] = useState({
    name: "",
    price: 0,
    type: "식료품",
    date: "",
    memo: "",
    repurchase: null,
    noRepurchase: null,
  });

  // memo input state
  const [memoChecked, setMemoChecked] = useState(false);

  //when submit button clicked
  const submitBtnHandler = (e) => {
    e.preventDefault();

    addProductData(productObject);

    //reset the inputs after submission
    setProductObject({
      name: "",
      price: 0,
      type: "식료품",
      date: "",
      memo: "",
      repurchase: null,
      noRepurchase: null,
    });
    setMemoChecked(false);
  };

  //product name
  const nameInputHandler = (e) => {
    setProductObject((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  //product price
  const priceInputHandler = (e) => {
    setProductObject((prevState) => ({
      ...prevState,
      price: e.target.value,
    }));
  };

  // product type
  const selectedTypeHandler = (e) => {
    setProductObject((prevState) => ({
      ...prevState,
      type: e.target.value,
    }));
  };

  //purchase date
  const dateInputHandler = (e) => {
    setProductObject((prevState) => ({
      ...prevState,
      date: e.target.value,
    }));
  };

  //memo
  const memoInputHandler = (e) => {
    setProductObject((prevState) => ({
      ...prevState,
      memo: e.target.value,
    }));
  };

  const memoCheckedHandler = (e) => {
    setMemoChecked(e.target.checked);
  };

  //repurchase
  const repurchaseHandler = (e) => {
    setProductObject((prevState) => ({
      ...prevState,
      repurchase: e.target.checked,
    }));
  };

  const noRepurchaseHandler = (e) => {
    setProductObject((prevState) => ({
      ...prevState,
      noRepurchase: e.target.checked,
    }));
  };

  return (
    <form className="form-container" onSubmit={submitBtnHandler}>
      <div className="name__input">
        <label htmlFor="name" className="name__label">
          이름
        </label>
        <input
          id="name"
          type="text"
          value={productObject.name}
          onChange={nameInputHandler}
          required
        />
      </div>
      <div className="price__input">
        <label htmlFor="price" className="price__label" type="number">
          가격
        </label>
        <input
          id="price"
          type="number"
          value={productObject.price}
          onChange={priceInputHandler}
          required
        />
      </div>
      <div className="type__input">
        <label htmlFor="type" className="type__label" type="text">
          유형
        </label>
        <select
          id="type"
          value={productObject.type}
          onChange={selectedTypeHandler}
        >
          <option value="식료품">식료품</option>
          <option value="의류">의류</option>
          <option value="가전 제품">가전 제품</option>
        </select>
      </div>
      <div className="purchase-date__input">
        <label htmlFor="purchase-date" className="purchase-date__label">
          구입 날짜
        </label>
        <input
          id="purchase-date"
          type="date"
          onChange={dateInputHandler}
          required
        />
      </div>
      <div className="memo__input">
        <label className="memo__label">메모</label>
        <input
          id="memo"
          type="checkbox"
          className="memo__checkbox"
          checked={memoChecked}
          onChange={memoCheckedHandler}
        />
        {memoChecked ? (
          <>
            <label htmlFor="memo">메모 작성</label>
            <input
              className="memo__checkbox-input"
              value={productObject.memo}
              onChange={memoInputHandler}
            />
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="repurchase__input">
        <label className="repurchase__label">재구매 의사</label>
        <input
          id="do-repurchase"
          type="radio"
          className="do-repurchase-input"
          checked={productObject.repurchase}
          onChange={repurchaseHandler}
        />
        <label htmlFor="do-repurchase">한다</label>
        <input
          id="dont-repurchase"
          type="radio"
          className="dont-repurchase-input"
          checked={productObject.noRepurchase}
          onChange={noRepurchaseHandler}
        />
        <label htmlFor="dont-repurchase">안 한다</label>
      </div>
      <button type="submit">추가</button>
    </form>
  );
};

export default ProductForm;
