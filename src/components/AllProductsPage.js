import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { SingleProduct, Pagination } from "./";
import { getProductById } from "../api/products";
import {Flex} from '@chakra-ui/react';

const AllProductsPage = ({ allProducts, setAllProducts, isAdmin, setIsLoading }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const idArr = allProducts.map((e) => e.id);

  useEffect(() => {
    async function setUp() {
      setIsLoading(true);
      try {
        const prods = [];
        for (const ids of idArr) {
          const withType = await getProductById(ids);
          prods.push(withType.products);
        }
        setProducts([...prods]);
      } catch (err) {
        console.log(err);
      }finally{
        setIsLoading(false)
      }
    }
    setUp();
  }, [allProducts]);
  //get currrent posts
  const indexOfLastProd = currentPage * productsPerPage;
  const indexOfFirstProd = indexOfLastProd - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProd, indexOfLastProd);
  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const beverages = products
    .map((product) => {
      for (let items of product.type) {
        if (items.id === 4) {
          return product;
        }
      }
    })
    .filter((e) => {
      return e !== undefined;
    });

  const bakedGoods = products
    .map((product) => {
      for (let items of product.type) {
        if (items.id !== 4) {
          return product;
        }
      }
    })
    .filter((e) => {
      return e !== undefined;
    });

  return (
    <Switch>
      <Route exact path="/products/bakedgoods">
        <Flex direction='column' align='center' justify="center" wrap='wrap' mt='220px'>
          <div className="all-prods-main-container">
            <h2>Baked Goods</h2>
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={bakedGoods.length}
              paginate={paginate}
            />
          </div>
          <SingleProduct
            allProducts={bakedGoods.slice(indexOfFirstProd, indexOfLastProd)}
            isAdmin={isAdmin}
            setAllProducts={setAllProducts}
          />
        </Flex>
      </Route>

      <Route exact path="/products/beverages">
      <Flex direction='column' align='center' justify="center" wrap='wrap' mt='220px'>
          <div className="all-prods-main-container">
            <h2>Beverages</h2>
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={beverages.length}
              paginate={paginate}
            />
          </div>
          <SingleProduct
            allProducts={beverages.slice(indexOfFirstProd, indexOfLastProd)}
            isAdmin={isAdmin}
            setAllProducts={setAllProducts}
          />
        </Flex>
      </Route>

      <Route exact path="/products">
      <Flex direction='column' align='center' justify="center" wrap='wrap' mt='220px'>
          <div className="all-prods-main-container">
            <h2>All Products</h2>
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={products.length}
              paginate={paginate}
            />
          </div>
          <SingleProduct 
          allProducts={currentProducts} 
          isAdmin={isAdmin}
          setAllProducts={setAllProducts} />
        </Flex>
      </Route>
    </Switch>
  );
};

export default AllProductsPage;
