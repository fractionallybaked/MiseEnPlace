import React from "react";
import { removeItemFromCart } from "../api/cart";

const ItemDelete = ({ userId, productId, cartId, userCart, setUserCart }) => {
  console.log(
    "ItemDelete, userId, productId, cartId",
    userId,
    productId,
    cartId
  );
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
            console.log("ItemDelete deleteditem", deletedItem);
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
        <button type="submit">Remove Item</button>
      </form>
    </div>
  );
};

export default ItemDelete;
