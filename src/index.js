import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartProvider } from "./pages/CartContext";
ReactDOM.createRoot(document.getElementById("root")).render(
<CartProvider>
    <App />
</CartProvider>

);
