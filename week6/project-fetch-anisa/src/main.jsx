import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import ProductProvider from "./context/ProductContext.jsx";
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
ReactDOM.createRoot(document.getElementById("root")).render(
<ProductProvider>
<App />
</ProductProvider>
);