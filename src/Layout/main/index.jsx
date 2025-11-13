import React, { useContext } from "react";
import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import CartContextProvider from "../../context/CardContext";
import { Suspense } from "react";

const Layout = () => {
  return (
    <CartContextProvider>
      <div className={styles.layout}>
        <Navbar />
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </CartContextProvider>
  );
};

export default Layout;
