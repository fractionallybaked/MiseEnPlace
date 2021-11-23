import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ItemAdd, ItemUpdate, ItemDelete } from "./";
import { getMyID } from "../api/users";
import { getUserCart } from "../api/cart";
import { getToken } from "../auth";


const SingleProduct = ({ allProducts, isAdmin, userCart, setUserCart }) => {
  const token = getToken();
  const [userId, setUserId] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getCart() {
      const user = await getMyID();
      setUserId(user.id);

      if (user.id) {
        const userCart = await getUserCart(user.id);
        setUserCart(userCart);
      }
    }

    getCart();
  }, []);

  const [guestCart, setGuestCart] = useState([]);

  const addHandle = async (productId) => {
    const newItem = {
      id=productId,
      quantity=1
    }
    setGuestCart(...guestCart, newItem)
    localStorage.setItem("GuestCart", JSON.stringify(guestCart))
  };

  const deleteHandle = async (productId) => {
    const deletedItem = guestCart.filter((e)=>{
      return e.id === productId
    })
    const itemIndex = guestCart.indexOf(deletedItem)
    guestCart.splice(itemIndex, 1)
    setGuestCart(guestCart)
    localStorage.setItem("GuestCart", JSON.stringify(guestCart))
  };

  const updateHandle = async (productId) => {
    const item = guestCart.find((p)=>{
      return p.id === productId
    })
    item.quantity + 1
    setGuestCart(guestCart)
    localStorage.setItem("GuestCart", JSON.stringify(guestCart))
  };

  const getQuantity = (productId) => {
    const item = guestCart.find((p)=>{
      return p.id === productId
    })
    return item.quantity
  }

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
                //
                {location.pathname !== "./cart" && !token ? (
                  <button onClick={addHandle(e.id)}>Add Item</button>
                ) : null}
                {location.pathname === "./cart" && !token ? (
                  <button onClick={deleteHandle(e.id)}>Delete Item</button>
                ) : null}
                {location.pathname === "./cart" && !token ? (
                <div>
                
                <p>Current Quantity: {getQuantity(e.id)}</p>
                
                <button onClick={updateHandle(e.id)}>Add One More?</button>
                </div>
                ) : null}
                //
                {location.pathname !== "/cart" && token ? (
                  <ItemAdd productId={e.id} userId={userId} quantity={1} />
                ) : null}
                {location.pathname === "/cart" && token ? (
                  <ItemUpdate
                    cartId={userCart.id}
                    productId={e.id}
                    userId={userId}
                  />
                ) : null}
                {location.pathname === "/cart" && token ? (
                  <ItemDelete
                    userId={userId}
                    productId={e.id}
                    cartId={userCart.id}
                  />
                ) : null}
                //
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
