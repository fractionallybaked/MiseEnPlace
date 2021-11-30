import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ItemUpdate, ItemDelete } from "./";
import { getToken } from "../auth";
import { Flex, HStack } from '@chakra-ui/react';

const CartItem = ({ cartProducts, userId, userCart, setUserCart }) => {
  const token = getToken();
  const [guestCart, setGuestCart] = useState([]);

  const deleteHandle = async (productId) => {
    const deletedItem = guestCart.filter((e) => {
      return e.id === productId;
    });
    const itemIndex = guestCart.indexOf(deletedItem);
    guestCart.splice(itemIndex, 1);
    setGuestCart(guestCart);
    localStorage.setItem("GuestCart", JSON.stringify(guestCart));
  };

  const updateHandle = async (productId) => {
    const item = guestCart.find((p) => {
      return p.id === productId;
    });
    item.quantity++;
    setGuestCart(guestCart);
    localStorage.setItem("GuestCart", JSON.stringify(guestCart));
  };

  const getQuantity = (productId) => {
    const item = guestCart.find((p) => {
      return p.id === productId;
    });
    return item.quantity;
  };

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
              {!token ? (
                <button onClick={deleteHandle(item.id)}>Delete Item</button>
              ) : null}
              {!token ? (
                <div>
                  <p>Current Quantity: {getQuantity(item.id)}</p>

                  <button onClick={updateHandle(item.id)}>
                    Add One More?
                    </button>
                </div>
              ) : null}
              {token ? (
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
              ) : null}
            </div>
          );
        })
        : null}
    </Flex>
  );
};

export default CartItem;
