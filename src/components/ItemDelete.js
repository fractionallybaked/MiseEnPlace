import React from "react";
import { removeItemFromCart } from "../api/cart";

const ItemDelete = ({ userId, productId, cartId, userCart, setUserCart }) => {
  return (
    <div>
      <form
        id="add-item"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const deletedItem = await removeItemFromCart({
              userId,
              productId,
              cartId,
            });
            const filteredCart = userCart.filter((e) => {
              return e.productId !== productId;
            });
            setUserCart(filteredCart);
            return deletedItem;
          } catch (err) {
            console.error(err);
            throw err;
          }
        }}
      >
        <button className="add-to-cart" type="submit">Remove Item</button>
      </form>
    </div>
  );
};

export default ItemDelete;
