import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ApiProvider } from "./api/ApiContext.jsx";
import App from "./App.jsx";
import { AuthProvider } from "./auth/AuthContext.jsx";
import "./index.css";
import { CartProvider } from "./cart/CartContext.jsx";

createRoot(document.getElementById("root")).render(

  <AuthProvider>
    <ApiProvider>
      <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </CartProvider>
    </ApiProvider>
  </AuthProvider>,
);
