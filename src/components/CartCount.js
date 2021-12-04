import React, { useEffect, useState } from "react";
import { getUserCart } from "../api/cart";
import { getMyID } from "../api/users";

const CartCount = ({ isLoggedIn }) => {
  const [itemNum, setItemNum] = useState("");
  const [userCart, setUserCart] = useState([]);

  useEffect(() => {
    async function setUp() {
      try {
        const user = await getMyID();

        if (user) {
          const cart = await getUserCart(user.id);
          setUserCart(cart);
        }

        console.log(userCart);
      } catch (error) {
        console.error(error);
      }
    }
    setUp();
  }, []);

  useEffect(() => {
    let num = 0;
    for (const items of userCart) {
      num += items.quantity;
    }
    setItemNum(num);
  }, [userCart]);

  return (
    <div className="cart-count-container">
      <h3 className="cart-count-number">{itemNum}</h3>
    </div>
  );
};

export default CartCount;
