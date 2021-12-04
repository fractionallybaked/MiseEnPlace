import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { PastPurchases, ChangePassword } from "./";

const Account = ({ isLoggedIn }) => {
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
                <PastPurchases isLoggedIn={isLoggedIn} />
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
