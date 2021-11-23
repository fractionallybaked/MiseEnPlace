import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = (props) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  return (
    <div className="menu-container">
      <Link to="/profile" onClick={onClick}>
        Products
      </Link>
      <nav ref={dropdownRef} className={`menu ${isActive ? "show" : "hide"}`}>
        <ul>
          <li>
            <Link to="/products" onClick={() => setIsActive(false)}>
              All Products
            </Link>
          </li>
          <li>
            <Link to="/products/bakedgoods" onClick={() => setIsActive(false)}>
              Baked Goods
            </Link>
          </li>
          <li>
            <Link to="/products/beverages" onClick={() => setIsActive(false)}>
              Beverages
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DropdownMenu;
