import { React } from "react";

import Nav from "../components/nav"

const Layout = ({ children }) => (
  <div className="page-wrapper">
    <Nav />
    {children}
    <Footer />
  </div>
);

export default Layout;