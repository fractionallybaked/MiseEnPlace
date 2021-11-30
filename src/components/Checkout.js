import React from "react";
import { checkoutCart, removeItemFromCart } from "../api/cart";

const Checkout = ({ userId, cartProducts, cartId }) => {
  return (
    <div>
      <form
        id="checkout-cart"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            cartProducts.forEach(async (p) => {
              const itemId = p.id;
              const itemRemoved = await removeItemFromCart({
                userId,
                itemId,
                cartId,
              });
              return itemRemoved;
            });
            await checkoutCart(userId);
            return (
              <div>
                <h2>Order completed!</h2>
              </div>
            );
          } catch (err) {
            throw err;
          }
        }}
      >
        <button className="checkout-cart" type="submit">
          Checkout Cart
        </button>
      </form>
    </div>
  );
};

export default Checkout;
