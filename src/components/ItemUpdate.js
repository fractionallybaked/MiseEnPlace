import React, { useState } from "react";

import { updateCart } from "../api/cart";
import {Flex, HStack} from '@chakra-ui/react';
const ItemUpdate = ({
  cartId,
  productId,
  userId,
  quantity,
  userCart,
  setUserCart,
}) => {
  return (
    <HStack spacing='12px'>
      <button className="plus-minus"
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
              if (e.productId === productId) {
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
        <span className='material-icons'>add</span>
      </button>
      <h3>{quantity}</h3>
      <button className="plus-minus"
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
                if (e.productId === productId) {
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
        <span className='material-icons'>remove</span>
      </button>
    </HStack>
  );
};

export default ItemUpdate;
