import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GuestCheckout } from ".";
import { getProductById } from "../api/products";
import { Flex } from "@chakra-ui/react";

const GuestCartItem = () => {
  const [guestCart, setGuestCart] = useState([]);
  const [guestProducts, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    try {
      const totalArr = guestProducts.map((e) => {
        if (e.products) {
          let items = e.products;
          let price = items.price;
          let itemPrice = price * e.quantity;
          return itemPrice / 100;
        }
      });
      function add(accumulator, a) {
        return accumulator + a;
      }
      const userTotal = totalArr.reduce(add, 0);
      setTotal(userTotal.toFixed(2));
    } catch (err) {
      throw err;
    }
  }, [guestProducts]);

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
        if (p.quantity > 1) {
          p.quantity--;
        } else {
          return p;
        }
      }
      return p;
    });
    setGuestCart(items);
    localStorage.setItem("GuestCart", JSON.stringify(items));
  };

  return (
    <div>
      {guestCart.length ? (
        guestProducts.map((e) => {
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
              <button
                onClick={() => {
                  deleteHandle(item.id);
                }}
              >
                Delete Item
              </button>
              <div>
                <button
                  onClick={() => {
                    minusHandle(item.id);
                  }}
                >
                  -
                </button>

                <p>Current Quantity: {e.quantity}</p>

                <button
                  onClick={() => {
                    addOneHandle(item.id);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <h2>Your cart is empty! Show it some love and add some items!</h2>
        </div>
      )}
      {guestCart.length ? (
        <Flex
          direction="column"
          justify="center"
          align="center"
          h="200px"
          className="checkout-container"
        >
          <h3>Total: ${total} </h3>
          <GuestCheckout />
        </Flex>
      ) : null}
    </div>
  );
};

export default GuestCartItem;
