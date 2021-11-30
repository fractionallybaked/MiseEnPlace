import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { storeUser } from "../auth";
import { loginUser } from "../api/users";
import { useToast, Box } from '@chakra-ui/react';

const Login = ({ setIsLoggedIn, setIsAdmin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="all-products-main-container">
      <div className="login-main-container">
        <img className="login-icon" src={require('../images/bakingIcon.png')} />
        <h2>Log In</h2>
        <form
          className="login-form"
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const results = await loginUser(username, password);
              storeUser(results.token);
              setIsLoggedIn(true);
              setIsAdmin(results.user.isAdmin);
              setUsername("");
              setPassword("");
              handleClick();
            } catch (err) {
              toast({
                title: 'Username or password is incorrect',
                status: 'error',
                duration: 8000,
                isClosable: true,
                position: 'top'
              })
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

  );
};

export default Login;
