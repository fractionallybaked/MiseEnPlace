import React, { useState, useEffect } from "react";

import { getUserCart } from "../api/cart";

import { getProductById } from "../api/products";

import { getMyID } from "../api/users";

import CartItem from "./CartItem";

import Checkout from "./Checkout";

const Cart = () => {
  const [userCart, setUserCart] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    async function getCart() {
      const user = await getMyID();
      setUserId(user.id);

      if (user.id) {
        const userCart = await getUserCart(user.id);
        setUserCart(userCart);
      }
    }

    getCart();
  }, []);

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    async function setProducts() {
      const allProducts = await Promise.all(
        userCart.map(async (item) => {
          const productId = item.productId;
          const newProduct = await getProductById(productId);
          newProduct.quantity = item.quantity;
          return newProduct;
        })
      );
      setCartProducts(allProducts);
    }
    setProducts();
  }, [userCart]);

  console.log("CART USERCART", userCart);
  return (
    <div className="all-products-main-container">
      <div className="cart-container">
        <h2>Your Cart</h2>
        <div className="cart-products">
          <CartItem
            cartProducts={cartProducts}
            userCart={userCart}
            setUserCart={setUserCart}
            userId={userId}
            setUserId={setUserId}
          />
          <Checkout userId={userId} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
