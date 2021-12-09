import React, { useState, useEffect } from "react";
import { getPurchaseHistory } from "../api/cart";
import { getMyID } from "../api/users";
import { PurchasedProduct } from ".";

const PastPurchases = ({}) => {
  const [purchased, setPurchased] = useState([]);
  useEffect(() => {
    try {
      async function getProd() {
        let myID = await getMyID();
        const product = await getPurchaseHistory(myID.id);
        setPurchased(product);
      }
      getProd();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return <PurchasedProduct allProducts={purchased} />;
};

export default PastPurchases;
