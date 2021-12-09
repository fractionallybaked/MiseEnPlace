import React, { useState, useEffect } from "react";
import { getPurchaseHistory } from "../api/cart";
import { getMyID } from "../api/users";
import { getProductById } from "../api/products";
import { PurchasedProduct } from ".";

const PastPurchases = ({}) => {
  const [purchased, setPurchased] = useState([]);
  const [boughtAt, setBoughtAt] = useState([]);
  useEffect(() => {
    try {
      async function getProd() {
        let myID = await getMyID();
        const product = await getPurchaseHistory(myID.id);
        const idArr = product.map((e) => e.productId);
        const allProducts = [];
        for (const ids of idArr) {
          const withType = await getProductById(ids);
          allProducts.push(withType);
        }
        setBoughtAt(product);
        setPurchased(allProducts);
      }
      getProd();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return <PurchasedProduct allProducts={purchased} boughtAt={boughtAt} />;
};

export default PastPurchases;
