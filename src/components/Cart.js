import React, { useState, useEffect } from "react";

import { getToken } from "../auth";

import { getUserCart } from "../api/cart";

import Item from "./Item";
import { getProductById } from "../api/products";
import SingleProduct from "./SingleProduct";

const Cart = () => {
  const token = getToken();

  const [userCart, setUserCart] = useState([]);

  useEffect(async () => {
    const userCart = await getUserCart();
    setUserCart(userCart);
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
