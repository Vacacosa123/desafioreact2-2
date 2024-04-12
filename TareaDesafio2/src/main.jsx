import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import NatureProvider from "./context/NatureProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NatureProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </NatureProvider>
  </React.StrictMode>
);
