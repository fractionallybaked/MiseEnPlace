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
    async function getCart() {
      const usersID = await getMyID();
      setUserId(usersID);

      if (usersID) {
        const userCart = await getUserCart(usersID.id);
        setUserCart(userCart);
      }
    }

    getCart();
  }, []);

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    console.log(userCart);
    async function setProducts() {
      const allProducts = await Promise.all(
        userCart.map(async (item) => {
          const productId = item.productId;
          const newProduct = await getProductById(productId);
          return newProduct;
        })
      );
      console.log("ALLPRODUCTS", allProducts);
      setAllProducts(allProducts);
    }
    setProducts();
  }, [userCart]);

 
    return (
      <div className="all-products-main-container">
        <div className="cart-container">
          <h2>Your Cart</h2>
          <div className="cart-products">
            <SingleProduct allProducts={allProducts} />
            {/* <Checkout userId={userId} /> */}
          </div>
        </div>
      </div>
    );
  
};

export default Cart;
