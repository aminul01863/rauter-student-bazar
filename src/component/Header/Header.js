import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <h2>Welcome to student bazar</h2>
      <nav className="header">
        <Link to="/home">Home</Link>
        <Link to="/order">Order</Link>
      </nav>
    </div>
  );
};

export default Header;
