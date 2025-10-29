import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/main";
import HomePage from "../pages/Home";
import Shop from "../pages/Shop";
import AboutUs from "../pages/AboutUs";
import Collection from "../pages/Collection";
import Error from "../pages/Error";
import PrivateLayout from "../Layout/private";
import ItemDetail from "../pages/ItemDetail";
import { Login } from "../pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "collection/:category",
        element: <Collection />,
      },
      {
        path: "collection/:category/:productId",
        element: <ItemDetail />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
]);
