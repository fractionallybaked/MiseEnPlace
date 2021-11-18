import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import { getAllProducts } from "../api/products";

import {
  Navbar,
  SingleProduct,
  CreateProduct
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
      setIsLoggedIn= {setIsLoggedIn}
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
        <CreateProduct setAllProducts={setAllProducts} />
        </Route>
        <Route exact path="/">
          <h2>home</h2>
        </Route>
        
      </Switch>
    </div>
  );
};

export default App;
