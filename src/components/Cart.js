import React, { useState, useEffect } from "react";
import { getUserCart } from "../api/cart";
import { getProductById } from "../api/products";
import { getMyID } from "../api/users";
import { getToken } from "../auth";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { Flex } from "@chakra-ui/react";
import GuestCartItem from "./GuestCartItem";
import GuestCheckout from "./GuestCheckout";

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
        console.log(err)
      } finally {
        setIsLoading(false);
      }
    }
    getCart();

  }, []);

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    async function setProducts() {
      try{
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
    }catch(err){
      console.log(err);
    }
  }
    setProducts();
  }, [userCart]);

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      wrap="wrap"
      mt="220px"
    >
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
          ) : null}
          {!token ? <GuestCartItem /> : null}

          {userCart.length ? (
            <Flex
              direction="column"
              justify="center"
              align="center"
              h="200px"
              className="checkout-container"
            >
              <h3>Total: ${total} </h3>
            </Flex>
          ) : null}
          {token ? (
            <Checkout
              userId={userId}
              cartProducts={cartProducts}
              cartId={userCart.id}
            />
          ) : null}
          {!token ? <GuestCheckout /> : null}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Cart;
