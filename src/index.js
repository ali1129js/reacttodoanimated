/**
 * @Author: Ali Ismail
 * @Date:   2018-04-01T14:27:45+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-01T14:39:39+02:00
 */
import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App"

const destination = document.querySelector("#root");

ReactDom.render(
  <App />,destination
);
