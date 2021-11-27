import React, { useEffect, useState } from "react";
import { addItemToCart } from "../api/cart";

const ItemAdd = ({ productId, userId, quantity, userCart, setUserCart }) => {
  const [alreadyAdded, setAdded] = useState(false);

  useEffect(() => {
    const alreadyAdded = userCart.filter((e) => {
      return e.productId === productId;
    });
    console.log("AA", alreadyAdded);
    if (alreadyAdded.length) {
      setAdded(true);
      console.error("This item is already in your cart!");
    }
  }, [userCart]);

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
            setUserCart([...userCart, addedItem]);
          } catch (err) {
            throw err;
          }
        }}
      >
        {alreadyAdded ? (
          <div>
            <p className="add-to-cart">Item already added!</p>
          </div>
        ) : (
          <button className="add-to-cart" type="submit">
            Add Item to Cart
          </button>
        )}
      </form>
    </div>
  );
};

export default ItemAdd;
