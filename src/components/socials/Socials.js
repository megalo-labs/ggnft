import * as React from "react";

import Discord from "../../../assets/discord.svg";
import Instagram from "../../../assets/instagram.svg";
import TikTok from "../../../assets/tiktok.svg";
import Twitter from "../../../assets/twitter.svg";
import YouTube from "../../../assets/youtube.svg";
import OpenSea from "../../../assets/opensea.svg";

import "./Socials.scss";

const Socials = () => (
  <div className="social-icons">
    <a href="/" title="OpenSea">
      <OpenSea />
    </a>
    <a href="https://discord.gg/2YWCpXF6GX" target="_blank" rel="noreferrer" title="Discord">
      <Discord />
    </a>
    <a href="https://www.instagram.com/gabaghoulsnft/" target="_blank" rel="noreferrer" title="Instagram">
      <Instagram />
    </a>
    <a href="https://www.tiktok.com/@gabaghoulsnft" target="_blank" rel="noreferrer" title="TikTok">
      <TikTok />
    </a>
    <a href="https://www.youtube.com/channel/UC3WuYZ33gpSRShdptlAwfLg" target="_blank" rel="noreferrer" title="YouTube">
      <YouTube />
    </a>
    <a href="https://mobile.twitter.com/gabaghoulsnft" target="_blank" rel="noreferrer" title="Twitter">
      <Twitter />
    </a>
  </div>
);

export default Socials;