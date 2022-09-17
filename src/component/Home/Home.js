import React from "react";
import { useState } from "react";
import Books from "../Books/Books";
import Cart from "../Cart/Cart";
import useBook from "../hooks/useBook";
import "./Home.css";
const Home = () => {
  const [book, setBook] = useBook();
  const [cart, setCart] = useState([]);
  const handelAddToCart = (selectedItem) => {
    const exists = cart.find((book) => book._id === selectedItem._id);
    if (!exists) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      alert("Already Added");
    }
  };
  const handelRemoveItem = (selectedItem) => {
    const rest = cart.filter((book) => book._id !== selectedItem._id);
    setCart(rest);
  };

  return (
    <div className="home-container">
      <div className="book-container">
        {book.map((book) => (
          <Books
            key={book._id}
            book={book}
            handelAddToCart={() => handelAddToCart(book)}></Books>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handelRemoveItem={handelRemoveItem}></Cart>
      </div>
    </div>
  );
};

export default Home;
