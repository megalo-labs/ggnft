import * as React from "react";

import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

import "./Layout.scss";

const Layout = ({ children }) => (
  <div className="page-wrapper">
    <Nav />
    {children}
    <Footer />
  </div>
);

export default Layout;