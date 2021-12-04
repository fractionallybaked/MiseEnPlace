import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const GuestCheckout = ({ guestCart, setGuestCart }) => {
  const history = useHistory();

  const deleteEverything = () => {
    const newCart = [];
    setGuestCart(newCart);
    localStorage.setItem("GuestCart", JSON.stringify(newCart));
  };

  return (
    <div>
      <form
        id="checkout-cart"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            deleteEverything();
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

export default GuestCheckout;
