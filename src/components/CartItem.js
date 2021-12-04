import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ItemUpdate, ItemDelete } from "./";

import { getToken } from "../auth";
import { Flex, HStack, Heading } from '@chakra-ui/react';


const CartItem = ({ cartProducts, userId, userCart, setUserCart }) => {
  return (
    <Flex direction="column" justify="center" align="center">
      {cartProducts.length && userCart.length ? (
        cartProducts.map((e) => {
          let item;
          e.products ? (item = e.products) : (item = e);
          return (
            <div className="single-product-card" key={item.id}>
              <Link className="single-product-link" to={`/product/${item.id}`}>
                <img className="cart-image" src={item.photo} />
                <Heading as='h3' size='m'>{item.name}</Heading>
                <span className="single-product-price">
                  ${(Math.round(item.price) / 100).toFixed(2)}
                </span>
              </Link>

              <HStack spacing="15px">
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
      ) : (
        <Flex direction='column' align='center' justify="center" wrap='wrap'>
        <Heading as='h2' size='m' textAlign='center'>
          Your cart is empty! Show it some love and add some items!
        </Heading>
      </Flex>
      )}
    </Flex>
  );
};

export default CartItem;
