import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { ToastContainer } from "react-toastify";

import { Footer } from "../Footer";
import { Header } from "../Header";
import styles from "./styles.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        closeOnClick
        newestOnTop
        theme="light"
      />
    </div>
  );
};

export default Layout;
