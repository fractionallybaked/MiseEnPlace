import React, { useEffect, useState } from "react";

const GuestAdd = ({ productId }) => {
  const [alreadyAdded, setAdded] = useState(false);

  const [guestCart, setGuestCart] = useState([]);

  useEffect(() => {
    const alreadyAdded = guestCart.filter((e) => {
      return e.productId === productId;
    });

    if (alreadyAdded.length) {
      setAdded(true);
    }
  }, [guestCart]);

  const addHandle = async (productId) => {
    try {
      const newItem = {};
      newItem.id = productId;
      newItem.quantity = 1;
      setGuestCart([...guestCart, newItem]);
      localStorage.setItem("GuestCart", JSON.stringify(guestCart));
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
        <button className="add-to-cart" onClick={addHandle}>
          Add Item to Cart
        </button>
      )}
    </div>
  );
};

export default GuestAdd;
