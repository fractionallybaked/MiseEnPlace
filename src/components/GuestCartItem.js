import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductById } from "../api/products";
import { Flex, HStack, Heading } from '@chakra-ui/react';
const GuestCartItem = () => {
  const [guestCart, setGuestCart] = useState([]);
  const [guestProducts, setProducts] = useState([]);

  useEffect(() => {
    async function setItems() {
      const allProducts = await Promise.all(
        guestCart.map(async (item) => {
          const productId = item.id;
          const newProduct = await getProductById(productId);
          newProduct.quantity = item.quantity;
          return newProduct;
        })
      );
      setProducts(allProducts);
    }
    setItems();
  }, [guestCart]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("GuestCart"));

    setGuestCart(cart);
  }, []);

  const deleteHandle = async (productId) => {
    const newCart = guestCart.filter((e) => {
      return e.id !== productId;
    });
    setGuestCart(newCart);
    localStorage.setItem("GuestCart", JSON.stringify(newCart));
  };

  const addOneHandle = async (productId) => {
    const items = guestCart.map((p) => {
      if (p.id === productId) {
        p.quantity++;
      }
      return p;
    });
    setGuestCart(items);
    localStorage.setItem("GuestCart", JSON.stringify(items));
  };

  const minusHandle = async (productId) => {
    const items = guestCart.map((p) => {
      if (p.id === productId) {
        p.quantity--;
      }
      return p;
    });
    setGuestCart(items);
    localStorage.setItem("GuestCart", JSON.stringify(items));
  };

  return (
    <Flex direction='column' justify='center' align='center'>
      {guestCart.length ? (
        guestProducts.map((e) => {
          // console.log("E", e);
          let item;
          e.products ? (item = e.products) : (item = e);
          // console.log("ITEM!", item);
          return (
            <div className="single-product-card" key={item.id}>
              <Link className="single-product-link" to={`/product/${item.id}`}>
                <img className="cart-image" src={item.photo} />
                <Heading as='h3' size='m'>{item.name}</Heading>
                <span className="single-product-price">
                  ${(Math.round(item.price) / 100).toFixed(2)}
                </span>
              </Link>
              <HStack spacing='12px'>
                <button className="plus-minus"
                  onClick={() => {
                    minusHandle(item.id);
                  }}
                >
                  <span className='material-icons'>remove</span>
                </button>

                <Heading as='h3' size='m'>{e.quantity}</Heading>

                <button className="plus-minus"
                  onClick={() => {
                    addOneHandle(item.id);
                  }}
                >
                  <span className='material-icons'>add</span>
                </button>
                <button className="add-to-cart"
                  onClick={() => {
                    deleteHandle(item.id);
                  }}
                >
                  Remove Item
              </button>
              </HStack>
            </div>
          );
        })
      ) : (
        <div>
          <h2>Your cart is empty! Show it some love and add some items!</h2>
        </div>
      )}
    </Flex>
  );
};

export default GuestCartItem;
