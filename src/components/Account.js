import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import {} from "./";

const Account = () => {
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
          <div className="admin-form-main-container">
            <CreateProduct setAllProducts={setAllProducts} isAdmin={isAdmin} />
          </div>
        </Route>

        <Route exact path="/admin/addtype">
          <div className="admin-form-main-container">
            <AddType
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              isAdmin={isAdmin}
            />
          </div>
        </Route>

        <Route exact path="/admin/manageusers">
          <div className="admin-form-main-container">
            <ManageUsers isAdmin={isAdmin} />
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default Account;
