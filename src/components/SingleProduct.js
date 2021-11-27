import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ItemAdd, ItemUpdate, ItemDelete } from "./";
import { getMyID } from "../api/users";
import { getUserCart } from "../api/cart";
import { getToken } from "../auth";

const SingleProduct = ({ allProducts, isAdmin }) => {
  const token = getToken();
  const [userId, setUserId] = useState([]);
  const [userCart, setUserCart] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getID() {
      const user = await getMyID();
      setUserId(user.id);

      if (user.id) {
        const userCart = await getUserCart(user.id);
        setUserCart(userCart);
      }
    }
    getID();
  }, []);

  const [guestCart, setGuestCart] = useState([]);

  const addHandle = async (productId) => {
    try {
      const newItem = {};
      newItem.id = productId;
      newItem.quantity = 1;
      setGuestCart(...guestCart, newItem);
      localStorage.setItem("GuestCart", JSON.stringify(guestCart));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="single-product-main-container">
      {allProducts.length
        ? allProducts.map((el) => {
            let e;
            el.products ? (e = el.products) : (e = el);

            return (
              <div className="single-product-card" key={e.id}>
                <img className="product-image" src={e.photo} />
                <h3>{e.name}</h3>
                <div className="outerDivWrapper">
                  <div className="outerDiv">
                    <div className="scrollableContent">
                      <p>{e.description}</p>
                    </div>
                  </div>
                </div>
                <span className="single-product-price">
                  ${(Math.round(e.price) / 100).toFixed(2)}
                </span>
                {!token ? (
                  <button onClick={() => addHandle(e.id)}>Add Item</button>
                ) : null}
                {token ? (
                  <ItemAdd
                    productId={e.id}
                    userId={userId}
                    quantity={1}
                    userCart={userCart}
                    setUserCart={setUserCart}
                  />
                ) : null}
                {isAdmin ? (
                  <Link
                    to={{
                      pathname: "/editproduct",
                      state: {
                        pId: e.id,
                        pName: e.name,
                        pDescription: e.description,
                        pPrice: e.price,
                        pQuantity: e.quantity,
                        pPhoto: e.photo,
                      },
                    }}
                  >
                    <button>
                      <span className="material-icons edit-button">edit</span>
                    </button>
                  </Link>
                ) : null}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default SingleProduct;
