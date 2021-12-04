import React from "react";
import { checkoutCart } from "../api/cart";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Checkout = ({ userId }) => {
  const history = useHistory();

  return (
    <div>
      <form
        id="checkout-cart"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            await checkoutCart(userId);
            history.push("/ordercomplete");
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
