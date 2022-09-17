import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, handelRemoveItem, handelRemove }) => {
  let comment;
  if (cart.length === 0) {
    comment = <h3>Please added item </h3>;
  } else if (cart.length === 1) {
    comment = <h3>Please Added more</h3>;
  } else {
    comment = <h3>Thanks for added Item</h3>;
  }
  return (
    <div>
      <h3>This is cart {cart.length}</h3>

      {cart.map((book) => (
        <p>
          {book.ProductTitle}
          <button onClick={() => handelRemoveItem(book)}>X</button>
        </p>
      ))}
      {comment}
      {cart.length !== 0 ? (
        <button onClick={() => handelRemove(cart)} type="">
          Remove All
        </button>
      ) : (
        <p>keep adding</p>
      )}
      {cart.length === 0 ? (
        <p></p>
      ) : (
        <button>
          <Link to="/order">Review order</Link>{" "}
        </button>
      )}
    </div>
  );
};

export default Cart;
