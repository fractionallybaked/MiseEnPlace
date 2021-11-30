import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { clearCurrentUser, getToken } from "../auth";
import { SearchBar, DropdownMenu, Hamburger, CartCount } from "./";

const Navbar = ({
  isLoggedIn,
  setIsLoggedIn,
  isAdmin,
  setIsAdmin,
  query,
  setQuery
}) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const handleToggle = () => {
    setSearchOpen((prev) => !prev);
  };

  const toggleHamburger = () => {
    if (hamburgerOpen) {
      setHamburgerOpen((prev) => !prev);
    }
  };

  return (
    <nav>
      <div className="hamburger-icon" onClick={() => setHamburgerOpen(true)}>
        <Hamburger isOpen={hamburgerOpen}/>
      </div>
      <section className={hamburgerOpen ? "nav-links show" : "nav-links hide"}>
        <Link
          className={hamburgerOpen ? "link show" : "link hide"}
          onClick={() => toggleHamburger()}
          to="/"
        >
          Home
        </Link>
        <Link
          className={hamburgerOpen ? "link show" : "link hide"}
          onClick={() => toggleHamburger()}
          to="/about"
        >
          About
        </Link>
        {hamburgerOpen ? (
          <>
            <Link
              className={hamburgerOpen ? "link show" : "link hide"}
              onClick={() => toggleHamburger()}
              to="/products"
            >
              All Products
            </Link>
            <Link
              className={hamburgerOpen ? "link show" : "link hide"}
              onClick={() => toggleHamburger()}
              to="/products/bakedgoods"
            >
              Baked Goods
            </Link>
            <Link
              className={hamburgerOpen ? "link show" : "link hide"}
              onClick={() => toggleHamburger()}
              to="/products/beverages"
            >
              Beverages
            </Link>
          </>
        ) : (
          <DropdownMenu />
        )}
        {isLoggedIn && isAdmin ? (
          <Link
            className={hamburgerOpen ? "link show" : "link hide"}
            onClick={() => toggleHamburger()}
            to="/admin/createproduct"
          >
            Admin
          </Link>
        ) : isLoggedIn ? (
          <Link
            className={hamburgerOpen ? "link show" : "link hide"}
            onClick={() => toggleHamburger()}
            to="/account"
          >
            Account
          </Link>
        ) : null}
        {isLoggedIn ? (
          <Link
            className={hamburgerOpen ? "link show" : "link hide"}
            onClick={() => toggleHamburger()}
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
          <Link
            className={hamburgerOpen ? "link show" : "link hide"}
            onClick={() => toggleHamburger()}
            to="/login"
          >
            {" "}
            Log In
          </Link>
        )}
        {!isLoggedIn ? (
          <Link
            className={hamburgerOpen ? "link show" : "link hide"}
            onClick={() => toggleHamburger()}
            to="/register"
          >
            <span className='register'>Sign up</span>
          </Link>
        ) : null}
      </section>

      <section className="nav-cart">
        <button
          onClick={() => {
            handleToggle();
          }}
        >
          <span className="material-icons">
            {!searchOpen ? "search" : "close"}
          </span>
        </button>
        <Link to="/cart">
          <span className="material-icons">shopping_cart</span>
        </Link>
        <CartCount />
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
