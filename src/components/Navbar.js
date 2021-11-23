import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { clearCurrentUser, getToken } from "../auth";
import { SearchBar, DropdownMenu } from './';

const Navbar = ({ isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin, query, setQuery }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const handleToggle = () => {
    setSearchOpen(prev => !prev)
  }

  return (
    <nav>
      <section className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* <Link to="/products">Products</Link> */}
        <DropdownMenu />
        {isAdmin ? <Link to="/admin">Admin</Link> : null}
        {isLoggedIn ? (
          <Link
            to="/login"
            onClick={() => {
              clearCurrentUser();
              setIsLoggedIn(false);
              setIsAdmin(false);
            }}
          >
            Logout
          </Link>
        ) : (
          <Link to="/login"> Sign In</Link>
        )}
        {!isLoggedIn ? <Link to="/register">Sign up</Link> : null}
      </section>

      <section className='nav-cart'>

        <button onClick={() => {
          handleToggle()
        }}>
          <span className="material-icons">{!searchOpen ? "search" : "close"}</span>
        </button>

        <Link to='/cart'>
          <span className="material-icons">shopping_cart</span>
        </Link>

      </section>
      <SearchBar 
      searchOpen={searchOpen}
      setSearchOpen={setSearchOpen}
      query={query}
      setQuery={setQuery}
      />

    </nav>
  );
};

export default Navbar;
