import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Provider } from "./context/todoContext";

const el = document.querySelector("#root");
const root = ReactDOM.createRoot(el);

root.render(
  <Provider>
    <App />
  </Provider>
);
