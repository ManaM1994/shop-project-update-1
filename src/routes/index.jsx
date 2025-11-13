import { createBrowserRouter } from "react-router-dom";
import { ReducerTest } from "../components/reducerTest";
import { Page } from "../pages/Counter";
import { lazy } from "react";

const Layout = lazy(() => import("../Layout/main"));
const PrivateLayout = lazy(() => import("../Layout/private"));
const HomePage = lazy(() => import("../pages/Home"));
const Collection = lazy(() => import("../pages/Collection"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Error = lazy(() => import("../pages/Error"));
const Shop = lazy(() => import("../pages/Shop"));
const Login = lazy(() =>
  import("../pages/login").then((module) => {
    return { defult: module.Login };
  })
);
const Cart = lazy(() =>
  import("../pages/cart").then((module) => {
    return { defult: module.Cart };
  })
);
const ItemDetail = lazy(() => import("../pages/ItemDetail"));

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
      {
        path: "reducer",
        element: <ReducerTest />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "counter",
        element: <Page />,
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
