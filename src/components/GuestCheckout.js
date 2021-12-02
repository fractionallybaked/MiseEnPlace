import React, { useState, useEffect } from "react";

const GuestCheckout = () => {
  const [guestCart, setGuestCart] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("GuestCart"));

    setGuestCart(cart);
  }, []);

  const deleteEverything = async () => {
    const newCart = guestCart.map((e) => {
      localStorage.removeItem("GuestCart", e);
    });
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
        <button type="submit">Checkout Cart</button>
      </form>
    </div>
  );
};

export default GuestCheckout;
