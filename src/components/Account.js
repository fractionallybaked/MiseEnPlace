import React, { useState, useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { getPurchaseHistory } from "../api/cart";
import { getMyID } from "../api/users";
import { getProductById } from "../api/products";
import { PastPurchases, ChangePassword } from "./";

const Account = ({ isLoggedIn }) => {
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

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              <Tab _selected={{ color: "white", bg: "#c97c5d" }}>
                Past Purchases
              </Tab>
              <Tab _selected={{ color: "white", bg: "#c97c5d" }}>
                Change Password
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <PastPurchases purchased={purchased} boughtAt={boughtAt} />
              </TabPanel>
              <TabPanel>
                <ChangePassword isLoggedIn={isLoggedIn} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </>
      ) : (
        <div> Error: You must be logged in to view account information </div>
      )}
    </div>
  );
};

export default Account;
