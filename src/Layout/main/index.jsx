import React, { useContext } from "react";
import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Suspense } from "react";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
