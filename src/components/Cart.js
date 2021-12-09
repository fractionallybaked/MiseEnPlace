import React, { useState, useEffect } from "react";
import { getUserCart } from "../api/cart";
import { getProductById } from "../api/products";
import { getMyID } from "../api/users";
import { getToken } from "../auth";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { Flex, Heading } from "@chakra-ui/react";
import GuestCartItem from "./GuestCartItem";

const Cart = ({ setIsLoading }) => {
  const [userCart, setUserCart] = useState([]);
  const [userId, setUserId] = useState(null);
  const [total, setTotal] = useState(0);
  const token = getToken();

  useEffect(() => {
    async function getCart() {
      setIsLoading(true);
      try {
        const user = await getMyID();
        setUserId(user.id);

        if (user.id) {
          const userCart = await getUserCart(user.id);
          setUserCart(userCart);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    getCart();
  }, []);

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    async function setProducts() {
      try {
        const allProducts = await Promise.all(
          userCart.map(async (item) => {
            const productId = item.productId;
            const newProduct = await getProductById(productId);
            newProduct.quantity = item.quantity;
            return newProduct;
          })
        );
        setCartProducts(allProducts);

        const totalArr = userCart.map((item) => {
          let total = 0;
          total += item.itemTotal * item.quantity;
          return total / 100;
        });

        function add(accumulator, a) {
          return accumulator + a;
        }

        const userTotal = totalArr.reduce(add, 0);

        setTotal(userTotal);
      } catch (err) {
        console.error(err);
      }
    }
    setProducts();
  }, [userCart]);

  return (
    <Flex direction="column" align="center" justify="center" mt="220px">
      <Flex direction="column" align="center">
        <Flex direction="row" justify="center" wrap="wrap">
          {token ? (
            <CartItem
              cartProducts={cartProducts}
              userCart={userCart}
              setUserCart={setUserCart}
              userId={userId}
              setUserId={setUserId}
            />
          ) : (
            <GuestCartItem />
          )}

          {userCart.length ? (
            <Flex
              direction="column"
              justify="center"
              align="center"
              h="100px"
              className="checkout-container"
            >
              <Heading size="m">Total: ${total.toFixed(2)} </Heading>
            </Flex>
          ) : null}
          {token && userCart.length ? (
            <Checkout
              userId={userId}
              cartProducts={cartProducts}
              cartId={userCart.id}
              setUserCart={setUserCart}
            />
          ) : null}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Cart;
