import * as React from "react";

import Discord from "../../../assets/discord.svg";
import Instagram from "../../../assets/instagram.svg";
import TikTok from "../../../assets/tiktok.svg";
import Twitter from "../../../assets/twitter.svg";

import "./Socials.scss";

const Socials = () => (
  <div className="social-icons">
    <a href="https://discord.gg/2YWCpXF6GX" target="_blank" rel="noreferrer">
      <Discord />
    </a>
    <a href="https://www.instagram.com/gabaghoulsnft/" target="_blank" rel="noreferrer">
      <Instagram />
    </a>
    <a href="https://www.tiktok.com/@gabaghoulsnft" target="_blank" rel="noreferrer">
      <TikTok />
    </a>
    <a href="https://mobile.twitter.com/gabaghoulsnft" target="_blank" rel="noreferrer">
      <Twitter />
    </a>
  </div>
);

export default Socials;