import React, { useState, useEffect } from "react";

import { getToken } from "../auth";

import { getUserCart } from "../api/cart";

import { getProductById } from "../api/products";
import SingleProduct from "./SingleProduct";
import { getMyID } from "../api/users";

const Cart = () => {
  const token = getToken();

  const [userCart, setUserCart] = useState([]);

  useEffect(async () => {
    const userId = getMyID();
    if (userId) {
      const userCart = await getUserCart(userId.id);
      setUserCart(userCart);
    }
  }, []);

  if (token) {
    return (
      <div>
        <div className="cart-container">
          <h2>Your Cart</h2>
          <div className="cart-products">
            {userCart.forEach(async (item) => {
              const productId = item.productId;
              const newProduct = await getProductById(productId);
              console.log(newProduct);
              // <SingleProduct allProducts={newProduct}/>
            })}
          </div>
        </div>
      </div>
    );
  } else {
  }
};

export default Cart;
