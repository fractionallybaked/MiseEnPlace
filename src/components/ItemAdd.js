import React from "react";
import { addItemToCart } from "../api/cart";

const ItemAdd = ({ productId, userId, quantity }) => {
  return (
    <div>
      <form
        id="add-item"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const addedItem = await addItemToCart({
              productId,
              userId,
              quantity,
            });
            return addedItem;
          } catch (err) {
            throw err;
          }
        }}
      >
        <button className="add-to-cart" type="submit">Add Item to Cart</button>
      </form>
    </div>
  );
};

export default ItemAdd;
