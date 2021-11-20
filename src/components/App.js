import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import { getAllProducts } from "../api/products";
import { getMyID } from "../api/users";
import { getToken } from '../auth';
import {
  Navbar,
  SingleProduct,
  CreateProduct,
  AddType,
  Register,
  Login,
  EditProduct,
  AllProductsPage,
} from "./";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const token = getToken();
  useEffect(() => {
    async function setUp() {
      try {
        const products = await getAllProducts();

        setAllProducts(products.allProducts);

        const currentUser = await getMyID();
        console.log(currentUser)
        if (token && currentUser.isAdmin) {
          setIsAdmin(true);
        }
      } catch (err) {
        console.log(err);
      }
    }
    setUp();
  }, []);

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        isAdmin={isAdmin} />

      <Switch>
        <Route path="/about">
          <h2>about</h2>
        </Route>
        <Route path="/products">
          <AllProductsPage 
          allProducts={allProducts}
          isAdmin={isAdmin} />
        </Route>
        <Route path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/register">
          <Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/cart">
          <h2>cart</h2>
        </Route>
        <Route path="/admin">
          {isAdmin
            ? <><CreateProduct 
            setAllProducts={setAllProducts}
            isAdmin={isAdmin} />
            
              <AddType
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                isAdmin={isAdmin}
              />
            </>
            : null}
        </Route>

        <Route path ='/editproduct'>
          <EditProduct
          setAllProducts={setAllProducts}
          isAdmin={isAdmin}/>
        </Route>
        <Route exact path="/">
          <h2>home</h2>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
