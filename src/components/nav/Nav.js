import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Socials from "../socials/Socials";

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
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
    </svg>
    <Socials />
  </nav>
);

export default Nav;