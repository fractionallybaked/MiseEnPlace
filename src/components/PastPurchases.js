import React from "react";
import { PurchasedProduct } from ".";

const PastPurchases = ({ purchased, boughtAt }) => {
  return <PurchasedProduct allProducts={purchased} boughtAt={boughtAt} />;
};

export default PastPurchases;
