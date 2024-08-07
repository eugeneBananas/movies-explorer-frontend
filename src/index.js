import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
  document.body.classList.add("root")
);
