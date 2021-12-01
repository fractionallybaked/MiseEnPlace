import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { CreateProduct, AddType, ManageUsers } from "./";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex } from '@chakra-ui/react'

const Admin = ({ allProducts, setAllProducts, isAdmin }) => {
  return (
    <Tabs isFitted variant='enclosed'>
      <TabList mb='1em'>
        <Tab _selected={{ color: 'white', bg: '#c97c5d' }}>Create a Product</Tab>
        <Tab _selected={{ color: 'white', bg: '#c97c5d' }}>Add Type to Product</Tab>
        <Tab _selected={{ color: 'white', bg: '#c97c5d' }}>Manage Users</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <CreateProduct setAllProducts={setAllProducts} isAdmin={isAdmin} />
        </TabPanel>
        <TabPanel>
          <AddType
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            isAdmin={isAdmin}
          />
        </TabPanel>
        <TabPanel>
          <ManageUsers isAdmin={isAdmin} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Admin;
