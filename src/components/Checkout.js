import React from "react";
import { checkoutCart, removeItemFromCart } from "../api/cart";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Checkout = ({ userId, cartProducts, setUserCart, cartId }) => {
  const history = useHistory();

  return (
    <div>
      <form
        id="checkout-cart"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            await checkoutCart(userId);
            console.log(cartProducts);
            cartProducts.map(async (e) => {
              let productId = e.products.id;
              await removeItemFromCart({ userId, productId, cartId });
            });
            setUserCart([]);
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
