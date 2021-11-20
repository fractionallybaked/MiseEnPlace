import React, { useState, useEffect } from "react";

import { updateCart } from "../api/cart";

const ItemUpdate = ({ cartId, productId, userId }) => {
  const [quantity, setQuantity] = useState();

  return (
    <div>
      <form
        id="quantity-update"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const update = await updateCart({
              cartId,
              productId,
              quantity,
              userId,
            });
            return update;
          } catch (err) {
            throw err;
          }
        }}
      >
        <fieldset>
          <label>Quantity</label>
          <input
            id={productId}
            type="integer"
            value={quantity}
            onChange={(event) => {
              setQuantity(event.target.value);
            }}
          />
        </fieldset>
        <button type="submit">Update quantity</button>
      </form>
    </div>
  );
};

export default ItemUpdate;
