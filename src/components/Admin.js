import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { CreateProduct, AddType } from "./";
import ManageUsers from "./ManageUsers";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

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
    // <div>
    //   <nav className="admin-nav">
    //     <section className="nav-links">
    //       <Link to="/admin/createproduct">Create a Product</Link>
    //       <Link to="/admin/addtype">Add Type</Link>
    //       <Link to="/admin/manageusers">Manage Users</Link>
    //     </section>
    //   </nav>

    //   <Switch>
    //     <Route exact path="/admin/createproduct">
    //       <div className="admin-form-main-container">
    //         <CreateProduct setAllProducts={setAllProducts} isAdmin={isAdmin} />
    //       </div>
    //     </Route>

    //     <Route exact path="/admin/addtype">
    //       <div className="admin-form-main-container">
    //         <AddType
    //           allProducts={allProducts}
    //           setAllProducts={setAllProducts}
    //           isAdmin={isAdmin}
    //         />
    //       </div>
    //     </Route>

    //     <Route exact path="/admin/manageusers">
    //       <div className="admin-form-main-container">
    //         <ManageUsers isAdmin={isAdmin} />
    //       </div>
    //     </Route>
    //   </Switch>
    // </div>
  );
};

export default Admin;
