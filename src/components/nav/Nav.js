import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Socials from "../socials/Socials";
import Hamburger from "../../../assets/list.svg";

import "./Nav.scss";

const Nav = () => (
  <nav className="nav">
    <StaticImage
      src="../../images/hands.png"
      alt="small logo"
      className="hands"
    />
    <Link to="/#about" className="nav-link">ABOUT</Link>
    <Link to="/#team" className="nav-link">TEAM</Link>
    <Link to="roadmap" className="nav-link">ROADMAP</Link>
    <Link to="mint" className="nav-link">MINT</Link>
    <Link to="faq" className="nav-link">FAQ</Link>
    <Hamburger />
    <Socials />
  </nav>
);

export default Nav;