import * as React from "react";

import Discord from "../../../assets/discord.svg";
import Instagram from "../../../assets/instagram.svg";
import TikTok from "../../../assets/tiktok.svg";
import Twitter from "../../../assets/twitter.svg";

import "./Socials.scss";

const Socials = () => (
  <div className="social-icons">
    <a href="https://discord.gg/2YWCpXF6GX">
      <Discord />
    </a>
    <a href="https://www.instagram.com/gabaghoulsnft/">
      <Instagram />
    </a>
    <a href="https://www.tiktok.com/@gabaghoulsnft">
      <TikTok />
    </a>
    <a href="https://mobile.twitter.com/gabaghoulsnft">
      <Twitter />
    </a>
  </div>
);

export default Socials;