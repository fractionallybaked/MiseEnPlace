import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const PurchasedProduct = ({ allProducts, boughtAt }) => {
  return (
    <Flex direction="row" justify="center" wrap="wrap">
      {allProducts.length ? (
        allProducts.map((el) => {
          let e;
          el.products ? (e = el.products) : (e = el);
          let bought = boughtAt.map((item) => {
            if (item.productId === e.id) {
              return item.itemTotal;
            }
          });

          let last = 0;
          for (let i = 0; i < bought.length; i++) {
            if (bought[i]) {
              last = bought[i];
            }
          }

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
              <div>Bought at: ${(Math.round(last) / 100).toFixed(2)}</div>
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
