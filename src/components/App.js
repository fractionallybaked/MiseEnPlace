import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import { getAllProducts } from "../api/products";
import { getMyID } from "../api/users";
import { getToken } from "../auth";
import {
  Navbar,
  Register,
  Login,
  EditProduct,
  AllProductsPage,
  Cart,
  Header,
  LandingPage,
  Admin,
  Account,
  SingleProductPage,
  About,
  OrderComplete,
} from "./";
import SearchResultsPage from "./SearchResultsPage";
import { ChakraProvider, Spinner, Flex } from "@chakra-ui/react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const token = getToken();

  useEffect(() => {
    async function setUp() {
      setIsLoading(true);
      try {
        const products = await getAllProducts();
        setAllProducts(products.allProducts);

        const currentUser = await getMyID();

        if (token && currentUser.isAdmin) {
          setIsAdmin(true);
        }

        if (token) {
          setIsLoggedIn(true);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    setUp();
  }, []);

  return (
    <div className="App">
      <Header />
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        query={query}
        setQuery={setQuery}
      />
      {isLoading ? (
        <ChakraProvider>
          <Flex justify="center" align="center" h="100vh">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="rgba(238, 215, 197, 0.9)"
              color="#c97c5d"
              size="xl"
            />
          </Flex>
        </ChakraProvider>
      ) : null}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/products/searchresults">
          <div className="all-products-main-container">
            <SearchResultsPage
              query={query}
              setQuery={setQuery}
              allProducts={allProducts}
            />
          </div>
        </Route>

        <Route path="/products">
          <AllProductsPage
            allProducts={allProducts}
            isAdmin={isAdmin}
            setAllProducts={setAllProducts}
            setIsLoading={setIsLoading}
          />
        </Route>
        <Route exact path="/product/:productId">
          <div className="all-products-main-container">
            <SingleProductPage allProducts={allProducts} isAdmin={isAdmin} />
          </div>
        </Route>
        <Route path="/login">
          <ChakraProvider>
            <Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />
          </ChakraProvider>
        </Route>
        <Route path="/register">
          <ChakraProvider>
            <Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          </ChakraProvider>
        </Route>
        <Route path="/cart">
          <Cart setIsLoading={setIsLoading} />
        </Route>

        <Route path="/ordercomplete">
          <OrderComplete />
        </Route>

        <Route path="/admin">
          <div className="all-products-main-container">
            {isAdmin ? (
              <ChakraProvider>
                <Admin
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  isAdmin={isAdmin}
                />
              </ChakraProvider>
            ) : null}
          </div>
        </Route>
        {/* <Route path="/account">
          <div className="all-products-main-container">
            {isLoggedIn ? null : <Account />}
          </div>
        </Route> */}

        <Route path="/editproduct">
          <div className="all-products-main-container">
            <EditProduct setAllProducts={setAllProducts} isAdmin={isAdmin} />
          </div>
        </Route>
        <Route exact path="/">
          <ChakraProvider>
            <LandingPage />
          </ChakraProvider>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
