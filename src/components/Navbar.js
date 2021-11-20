import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { clearCurrentUser, getToken } from "../auth";

const Navbar = ({ isLoggedIn, setIsLoggedIn, isAdmin }) => {
    const token = getToken();

    useEffect(()=>{
if (token){
    setIsLoggedIn(true);
}
    }, []);

  return (
    <nav>
      <section className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        {isLoggedIn && isAdmin ? <Link to="/admin">Admin</Link> :null}
        {isLoggedIn ? (
          <Link
            to="/login"
            onClick={() => {
              clearCurrentUser();
              setIsLoggedIn(false);
            }}
          >
            Logout
          </Link>
        ) : (
          <Link to="/login"> Sign In</Link>
        )}
        <Link to="/register">Sign up</Link>
        <Link to="/cart">
          <span className="material-icons">shopping_cart</span>
        </Link>
      </section>
    </nav>
  );
};

export default Navbar;
