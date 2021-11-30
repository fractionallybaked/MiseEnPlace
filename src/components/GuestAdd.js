import React, { useEffect, useState } from "react";

const GuestAdd = ({ productId, guestCart, setGuestCart }) => {
  const [alreadyAdded, setAdded] = useState(false);

  useEffect(() => {
    const alreadyAdded = guestCart.filter((e) => {
      return e.id === productId;
    });
    if (alreadyAdded.length) {
      setAdded(true);
    }
  }, [guestCart]);

  const addHandle = async (productId) => {
    try {
      let newItem = {};
      newItem.id = productId;
      newItem.quantity = 1;
      setGuestCart([...guestCart, newItem]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {alreadyAdded ? (
        <div>
          <p className="add-to-cart">Already added to cart!</p>
        </div>
      ) : (
        <button
          className="add-to-cart"
          onClick={() => {
            addHandle(productId);
          }}
        >
          Add Item to Cart
        </button>
      )}
    </div>
  );
};

export default GuestAdd;
