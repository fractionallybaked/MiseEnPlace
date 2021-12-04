import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMyID } from "../api/users";
import { getUserCart } from "../api/cart";
import { getToken } from "../auth";
import { GuestAdd, ItemAdd, DeleteProduct } from "./";
import { Flex } from "@chakra-ui/react";

const SingleProduct = ({ allProducts, isAdmin, setAllProducts }) => {
  const token = getToken();
  const [userId, setUserId] = useState([]);
  const [userCart, setUserCart] = useState([]);

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

  return (
    <Flex direction="row" justify="center" wrap="wrap">
      {allProducts.length
        ? allProducts.map((el) => {
            let e;
            el.products ? (e = el.products) : (e = el);

            return (
              <div className="single-product-card" key={e.id}>
                <Link className="single-product-link" to={`/product/${e.id}`}>
                  <img className="product-image" src={e.photo} />
                  <h3>{e.name}</h3>
                </Link>
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
                {token ? (
                  <ItemAdd
                    productId={e.id}
                    userId={userId}
                    quantity={1}
                    userCart={userCart}
                    setUserCart={setUserCart}
                  />
                ) : (
                  <GuestAdd productId={e.id} />
                )}
                {isAdmin ? (
                  <Flex direction="row" align="center">
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
                    <DeleteProduct
                      productId={e.id}
                      setAllProducts={setAllProducts}
                    />
                  </Flex>
                ) : null}
              </div>
            );
          })
        : null}
    </Flex>
  );
};

export default SingleProduct;
