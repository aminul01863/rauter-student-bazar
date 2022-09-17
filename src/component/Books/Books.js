import React from "react";
import "./Books.css";
const Books = (props) => {
  const { handelAddToCart, book } = props;
  const { ProductTitle, Picture, RegularPrice } = book;
  return (
    <div className="books-container">
      <img src={Picture} alt="" />
      <h4>{ProductTitle}</h4>
      <p>$ {RegularPrice}</p>
      <button onClick={handelAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Books;
