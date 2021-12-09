import React from "react";
import { checkoutCart, removeItemFromCart } from "../api/cart";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Checkout = ({ userId, cartProducts, setUserCart, cartId, setIsLoading }) => {
  const history = useHistory();

  return (
    <div>
      <form
        id="checkout-cart"
        onSubmit={async (event) => {
          event.preventDefault();
          setIsLoading(true);
          try {
            await checkoutCart(userId);
            cartProducts.map(async (e) => {
              let productId = e.products.id;
              await removeItemFromCart({ userId, productId, cartId });
            });
            setUserCart([]);
            history.push("/ordercomplete");
          } catch (err) {
            throw err;
          }finally{
            setIsLoading(false);
          }
        }}
      >
        <button className="checkout-cart" type="submit">
          Checkout
        </button>
      </form>
    </div>
  );
};

export default Checkout;
