import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMyID } from "../api/users";
import { getUserCart } from "../api/cart";
import { getToken } from "../auth";
import { GuestAdd, ItemAdd, DeleteProduct } from "./";
<<<<<<< HEAD
import { Flex } from "@chakra-ui/react";
=======
import { Flex, Heading, Text } from "@chakra-ui/react";
>>>>>>> 8b9e77cf7beb48feff7bc8d5e88f7bf9e22441f2

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

  const [guestCart, setGuestCart] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("GuestCart"));
    if (cart) {
      setGuestCart(cart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("GuestCart", JSON.stringify(guestCart));
  }, [guestCart]);

  return (
    <Flex direction="row" justify="center" wrap="wrap">
      {allProducts.length
        ? allProducts.map((el) => {
            let e;
            el.products ? (e = el.products) : (e = el);

            return (
              <div className="single-product-card" key={e.id}>
                <Link className="single-product-link" to={`/product/${e.id}`}>
<<<<<<< HEAD
                  <img className="product-image" src={e.photo} />
                  <h3>{e.name}</h3>
=======
                <img className="product-image" src={e.photo} />
                <Heading as='h3' size='l'>{e.name}</Heading>
>>>>>>> 8b9e77cf7beb48feff7bc8d5e88f7bf9e22441f2
                </Link>
                <div className="outerDivWrapper">
                  <div className="outerDiv">
                    <div className="scrollableContent">
                      <Text size='m'>{e.description}</Text>
                    </div>
                  </div>
                </div>
                <span className="single-product-price">
                  ${(Math.round(e.price) / 100).toFixed(2)}
                </span>
<<<<<<< HEAD
=======
                {!token ? (
                  <GuestAdd
                    productId={e.id}
                    guestCart={guestCart}
                    setGuestCart={setGuestCart}
                  />
                ) : null}
>>>>>>> 8b9e77cf7beb48feff7bc8d5e88f7bf9e22441f2
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
