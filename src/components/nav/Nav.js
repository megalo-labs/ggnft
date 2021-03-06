import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Socials from "../socials/Socials";
import Hamburger from "../../../assets/list.svg";

import "./Nav.scss";

// ?? shouldn't webpack be complaining about this?
var classNames = require('classnames');
const scrollDown = 30;  // hide after scrolling pixels
const scrollUp = 100;

const Nav = () => {
  /**
   * if user scrolls past 
   */
  const [shown, setShown] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [ticking, setTicking] = useState(false);

  const linksClass = classNames({
    'nav-links': true,
    'shown': shown
  });

  const onLinkClick = () => setShown(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking && (window.scrollY > lastY + scrollDown || window.scrollY < lastY - scrollUp)) {
        window.requestAnimationFrame(() => {
          setShown(false);
          setTicking(false);
        });
        setTicking(true);
      }
    }
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <nav className="nav">
      <Link to="/" onClick={onLinkClick}>
        <StaticImage
          src="../../images/hands.png"
          alt="small logo"
          className="hands"
        />
      </Link>
      <div className={linksClass}>
        <Link to="/#about" className="nav-link" onClick={onLinkClick}>ABOUT</Link>
        <Link to="/#team" className="nav-link" onClick={onLinkClick}>TEAM</Link>
        <Link to="/roadmap" className="nav-link" onClick={onLinkClick}>ROADMAP</Link>
        <Link to="/mint" className="nav-link" onClick={onLinkClick}>MINT</Link>
        <Link to="/faq" className="nav-link" onClick={onLinkClick}>FAQ</Link>
      </div>
      <Hamburger
        onClick={() => {
          setShown(!shown);
          setLastY(window.scrollY);
        }}
      />
      <Socials />
    </nav>
  );
}

export default Nav;