import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@babel/polyfill";
import "./index.css";
import ErrorBoundary from "./ErrorBoundary";

if (process.env.NODE_ENV === "development") {
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById("app")
);
