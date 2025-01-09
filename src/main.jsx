import React from "react";
import App from "./App";
import "./styles.css";
import { createRoot } from "react-dom/client";

createRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
