import React, { Suspense } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import styles from "../main/layout.module.scss";

const PrivateLayout = () => {
  const { auth } = useAuth();

  if (!auth?.id) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={styles.layout}>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default PrivateLayout;
