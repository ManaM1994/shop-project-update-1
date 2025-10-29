import React, { useContext } from "react";
import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import CartContextProvider from "../../context/CardContext";

const Layout = () => {
  return (
    <CartContextProvider>
      <div className={styles.layout}>
        <Navbar />
        <Outlet />
      </div>
    </CartContextProvider>
  );
};

export default Layout;
