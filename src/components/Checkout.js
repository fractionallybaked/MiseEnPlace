import React from "react";
import { checkoutCart } from "../api/cart";

const Checkout = ({ userId, allProducts, cartId }) => {
  return (
    <div>
      <form
        id="checkout-cart"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const checkedOutCart = await checkoutCart(userId);
            return checkedOutCart;
          } catch (err) {
            throw err;
          }
        }}
      >
        <button type="submit">Checkout Cart</button>
      </form>
    </div>
  );
};

export default Checkout;
