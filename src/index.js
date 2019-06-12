import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import MyClass from "./MyClass.js";
import { Router, hashHistory as history } from "react-router";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>Start editing to see some magic happen!</h2>
      <MyClass />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
