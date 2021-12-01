import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ItemUpdate, ItemDelete } from "./";
import { getToken } from "../auth";
import { Flex, HStack } from '@chakra-ui/react';

const CartItem = ({ cartProducts, userId, userCart, setUserCart }) => {
  const token = getToken();

  return (
    <Flex direction='column' justify='center' align='center'>
      {cartProducts.length
        ? cartProducts.map((e) => {
          let item;
          e.products ? (item = e.products) : (item = e);

          return (
            <div className="single-product-card" key={item.id}>
              <Link className="single-product-link" to={`/product/${item.id}`}>
                <img className="cart-image" src={item.photo} />
                <h3>{item.name}</h3>
                <span className="single-product-price">
                  ${(Math.round(item.price) / 100).toFixed(2)}
                </span>
              </Link>

              <HStack spacing='15px'>
              <ItemUpdate
                cartId={userCart[0].id}
                productId={item.id}
                userId={userId}
                quantity={e.quantity}
                userCart={userCart}
                setUserCart={setUserCart}
              />

              <ItemDelete
                userId={userId}
                productId={item.id}
                cartId={userCart[0].id}
                userCart={userCart}
                setUserCart={setUserCart}
              />
              </HStack>
            </div>
          );
        })
       : (
        <div>
          <h2>Your cart is empty! Show it some love and add some items!</h2>
        </div>
      )}

    </Flex>
  );
};

export default CartItem;
