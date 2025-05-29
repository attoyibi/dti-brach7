import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CountProvider } from "./context/CountContext.jsx";
import { NameProvider } from "./context/NameContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountProvider>
      <NameProvider>
        <App />
      </NameProvider>
    </CountProvider>
  </React.StrictMode>
);
