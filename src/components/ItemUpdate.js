import React, { useState } from "react";

import { updateCart } from "../api/cart";

const ItemUpdate = ({
  cartId,
  productId,
  userId,
  quantity,
  userCart,
  setUserCart,
}) => {
  return (
    <div>
      <button
        onClick={async (event) => {
          event.preventDefault();
          try {
            const newQuantity = quantity + 1;
            const update = await updateCart({
              cartId,
              productId,
              quantity: newQuantity,
              userId,
            });
            const updatedItem = userCart.map((e) => {
              if (e.id === productId) {
                return update;
              } else {
                return e;
              }
            });
            setUserCart(updatedItem);
          } catch (err) {
            console.error(err);
          }
        }}
      >
        +
      </button>
      <h3>{quantity}</h3>
      <button
        onClick={async (event) => {
          if (quantity > 1) {
            event.preventDefault();
            try {
              const newQuantity = quantity - 1;
              const update = await updateCart({
                cartId,
                productId,
                quantity: newQuantity,
                userId,
              });
              const updatedItem = userCart.map((e) => {
                if (e.id === productId) {
                  return update;
                } else {
                  return e;
                }
              });
              setUserCart(updatedItem);
            } catch (err) {
              console.error(err);
            }
          }
        }}
      >
        -
      </button>
    </div>
  );
};

export default ItemUpdate;
