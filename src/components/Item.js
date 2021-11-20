import React, { useState, useEffect } from "react";

import { getToken } from "../auth";

import { updateCart } from "../api/cart";
import { getProductById } from "../api/products";
import { deleteCartItem } from "../../db";

const Item = (cartItem) => {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  // const product = await getProductById(cartItem.productId);

  return (
    <div key={product.id}>
      <h3 className="product-name">{product.name}</h3>
      <img src={product.photo} />
      <p className="product-info">{product.price}</p>
      <form
        id="quantity-update"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const update = await updateCart(cartItem.id, product.id, quantity);
            return update;
          } catch (err) {
            throw err;
          }
        }}
      >
        <fieldset>
          <label>Quantity</label>
          <input
            id={product.id}
            type="integer"
            value={quantity}
            onChange={(event) => {
              setQuantity(event.target.value);
            }}
          />
        </fieldset>
        <button type="submit">Update quantity</button>
        <form
          id="delete-item"
          onSubmit={async (event) => {
            event.preventDefault();
            try {
              const deletedItem = await deleteCartItem(
                cartItem.userId,
                product.id,
                cartItem.id
              );
            } catch (err) {
              throw err;
            }
          }}
        ></form>
      </form>
    </div>
  );
};

export default Item;
