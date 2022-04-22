import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Socials from "../socials/Socials";
import { navigate } from "@reach/router"

import MlDark from "../../../assets/ML_dark.svg";
import Speedometer from "../../../assets/speedometer.svg";

import "./Footer.scss";

const AdminButton = () => (
  <div className="admin-button">
    <Speedometer onClick={() => navigate('/admin/')} />
  </div>
);

const Footer = () => (
  <footer>
    <div className="footer-content-wrapper">
      <div className="footer-logos">
        <StaticImage
          src="../../images/hands.png"
          alt="hands"
          className="hands"
          objectFit="contain"
        />
        <div className="footer-logo">
          <MlDark className="ml-dark" />
        </div>
      </div>
      <div className="footer-text">
        <div> &copy; GabaGhouls NFT</div>
        <div className="indent"> a project of Megalo Labs, LLC. </div>
        <div className="indent indent-socials">
          Visit us on:
          <Socials className="footer-socials" />
        </div>
      </div>
    </div>
    <AdminButton />
  </footer>
);

export default Footer;