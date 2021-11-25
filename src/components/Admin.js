import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { CreateProduct, AddType } from "./";

const Admin = ({ allProducts, setAllProducts, isAdmin }) => {
  return (
    <div>
      <nav className="admin-nav">
        <section className="nav-links">
          <Link to="/admin/createproduct">Create a Product</Link>
          <Link to="/admin/addtype">Add Type</Link>
          <Link to="/admin/manageusers">Manage Users</Link>
        </section>
      </nav>

      <Switch>
        <Route exact path="/admin/createproduct">
          <div>
            <CreateProduct setAllProducts={setAllProducts} isAdmin={isAdmin} />
          </div>
        </Route>

        <Route exact path="/admin/addtype">
          <div>
            <AddType
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              isAdmin={isAdmin}
            />
          </div>
        </Route>

        <Route exact path="/admin/manageusers">
          <div>
            <h2 className="admin-header">Manage Users</h2>
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default Admin;
