import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import CartContextProvider from "./context/CardContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </AuthContextProvider>
    </Provider>
  </StrictMode>
);
