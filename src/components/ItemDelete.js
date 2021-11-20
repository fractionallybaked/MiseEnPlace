import React from "react";
import { removeItemFromCart } from "../api/cart";

const ItemDelete = ({ userId, productId, cartId }) => {
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
            return deletedItem;
          } catch (err) {
            throw err;
          }
        }}
      >
        <button type="submit">Remove Item</button>
      </form>
    </div>
  );
};

export default ItemDelete;
