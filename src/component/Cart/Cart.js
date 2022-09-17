import React from "react";

const Cart = ({ cart, handelRemoveItem }) => {
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
      {comment}
      {cart.map((book) => (
        <p>
          {book.ProductTitle}
          <button onClick={() => handelRemoveItem(book)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
