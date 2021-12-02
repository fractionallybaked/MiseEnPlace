import React from "react";

const GuestCheckout = () => {
  return (
    <div>
      <form
        id="checkout-cart"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            localStorage.removeItem("GuestCart");
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
        <button className="checkout-cart" type="submit">Checkout Cart</button>
      </form>
    </div>
  );
};

export default GuestCheckout;
