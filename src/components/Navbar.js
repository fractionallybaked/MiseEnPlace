import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <nav>
      <section className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Sign up</Link>
        <Link to="/cart">
          <span className="material-icons">shopping_cart</span>
        </Link>
      </section>
    </nav>
  );
};

export default Navbar;
