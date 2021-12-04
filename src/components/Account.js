import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { PastPurchases, ChangePassword } from "./";

const Account = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <>
          <nav className="admin-nav">
            <section className="nav-links">
              <Link to="/user/purchases">Past Purchases</Link>
              <Link to="/user/changepassword">Change Password</Link>
            </section>
          </nav>

          <Switch>
            <Route exact path="/user/purchases">
              <div className="admin-form-main-container">
                <PastPurchases isLoggedIn={isLoggedIn} />
              </div>
            </Route>

            <Route exact path="/user/changepassword">
              <div className="admin-form-main-container">
                <ChangePassword isLoggedIn={isLoggedIn} />
              </div>
            </Route>
          </Switch>
        </>
      ) : (
        <div> You must be logged in to view account information </div>
      )}
    </div>
  );
};

export default Account;
