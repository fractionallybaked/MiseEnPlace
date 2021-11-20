import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import { getAllProducts } from "../api/products";
// import { getMyID } from "../api/users";

import {
  Navbar,
  SingleProduct,
  CreateProduct,
  AddType,
} from "./";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function setUp() {
      try {
        const products = await getAllProducts();

        setAllProducts(products.allProducts);

        // const currentUser = await getMyID();
        // if (isLoggedIn && currentUser.isAdmin) {
        //   setIsAdmin(true);
        // }
      } catch (err) {
        console.log(err);
      }
    }
    setUp();
  }, []);

  return (
    <div className="App">
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <Switch>
        <Route path="/about">
          <h2>about</h2>
        </Route>
        <Route path="/products">
          <SingleProduct allProducts={allProducts} />
        </Route>
        <Route path="/login">
          <h2>login</h2>
        </Route>
        <Route path="/register">
          <h2>register</h2>
        </Route>
        <Route path="/cart">
          <h2>cart</h2>
        </Route>
        <Route path="/admin">
          {isAdmin
            ? <>
              <CreateProduct setAllProducts={setAllProducts} />
              <AddType
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                isAdmin={isAdmin} />
            </>
            : null
          }

        </Route>
        <Route exact path="/">
          <h2>home</h2>
        </Route>

      </Switch>
    </div>
  );
};

export default App;
