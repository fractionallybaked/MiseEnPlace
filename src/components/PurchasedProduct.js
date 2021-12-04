import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const PurchasedProduct = ({ allProducts }) => {
  return (
    <Flex direction="row" justify="center" wrap="wrap">
      {allProducts.length ? (
        allProducts.map((el) => {
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
              <div>
                Bought at: ${(Math.round(e.itemTotal) / 100).toFixed(2)}
              </div>
              <span className="single-product-price">
                Current Price: ${(Math.round(e.price) / 100).toFixed(2)}
              </span>
            </div>
          );
        })
      ) : (
        <div>
          <h2> You have no purchase history! </h2>
        </div>
      )}
    </Flex>
  );
};

export default PurchasedProduct;
