import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { storeUser } from "../auth";
import { loginUser } from "../api/users";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="login-main-container">
      <div className="login-left-container"></div>
      <div className="login-right-container">
        <div className="login-right-inner-container">
          <h2>Sign In</h2>
          <form
            className="login-form"
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const results = await loginUser(username, password);
                storeUser(results.token);
                setIsLoggedIn(true);
                setUsername("");
                setPassword("");
                handleClick();
              } catch (err) {
                alert("Username or password is incorrect");
                console.log(err);
              }
            }}
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />

            <button>Sign In</button>
          </form>
          <p>
            Want to become a member?{" "}
            <Link className="signup-link" to="/register">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
