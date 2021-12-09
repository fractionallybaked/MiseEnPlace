import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const GuestCheckout = ({ setGuestCart, setIsLoading }) => {
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
          setIsLoading(true);
          try {
            deleteEverything();
            history.push("/checkoutform");
          } catch (err) {
            throw err;
          } finally {
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

export default GuestCheckout;
