import React, { useState, useEffect } from "react";

import { getToken } from "../auth";

import { getUserCart } from "../api/cart";

const Cart = () => {
  const token = getToken();

  const [userCart, setUserCart] = useState([]);

  useEffect(async () => {
    const userCart = await getUserCart();
    console.log(userCart);
    setUserCart(userCart);
  }, []);

  if (token) {
    return (
      <div>
        <div className="cart-container">
          <h2>Your Cart</h2>
          <div className="cart-products"></div>
        </div>
      </div>
    );
  } else {
  }
};

export default Cart;
