import React from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { App } from "./components";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
