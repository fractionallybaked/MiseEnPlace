import React, { useState, useEffect } from "react";

import { getToken } from "../auth";

import { getUserCart } from "../api/cart";

import { getProductById } from "../api/products";

import { getMyID } from "../api/users";

import SingleProduct from "./SingleProduct";

import Checkout from "./Checkout";

const Cart = () => {
  const token = getToken();

  const [userCart, setUserCart] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    async function getCart(userId) {
      const usersID = await getMyID();
      setUserId(usersID);
      const userCart = await getUserCart(userId.id);
      setUserCart(userCart);
    }

    if (userId) {
      getCart(userId);
    }
  }, []);

  const [allProducts, setAllProducts] = useState([]);

  if (token) {
    return (
      <div>
        <div className="cart-container">
          <h2>Your Cart</h2>
          <div className="cart-products">
            {userCart.map(async (item) => {
              const productId = item.productId;
              const newProduct = await getProductById(productId);
              setAllProducts([...allProducts, newProduct]);
              return (
                <div key={productId}>
                  <SingleProduct allProducts={allProducts} />;
                </div>
              );
            })}
            {/* <Checkout userId={userId} /> */}
          </div>
        </div>
      </div>
    );
  } else {
  }
};

export default Cart;
