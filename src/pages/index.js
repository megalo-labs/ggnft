import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import "./index.scss";

import wings from "../images/wings.gif";
import memberJSON from "../../content/members.json";
import TeamCard from "../components/teamcard/TeamCard";
import Columns from "../components/columns/Columns";
import Helmet from "react-helmet";

// markup
const IndexPage = () => (
  <main>
    <Helmet>
      <meta charSet="utf-8" />
      <title>HOME | GABAGHOULS NFT</title>
    </Helmet>
    <Columns />
    <div className="main-container">
      {/* *********** HEADER *********** */}
      <header>
        <StaticImage
          src="../images/full.png"
          alt="gabaghouls"
          className="full-logo"
        />
      </header>
      {/* ************ ABOUT ************ */}
      <div className="about" id="about">
        <div className="wings-wrapper">
          <img
            src={wings}
            alt="wings"
            className="wings"
          />
        </div>
        <div className="about-content">
          <h2>Wtf is a GabaGhoul?</h2>
          <p>GabaGhouls are haunted creatures generated from Italian deli meats. They are a gang of 7,500, randomly generated on the Ethereum blockchain. GabaGhouls aims to achieve an inclusive community full of benefits and perks for owners. We encourage member feedback and appreciate involvement from our community. Through collaboration we can maximize utility and allow GabaGhouls to take the NFT space by storm. Take a look at our <Link to="/roadmap" className="inline-link">roadmap</Link> or something.</p>
        </div>
      </div>
      <div className="team" id="team">
        <h2>Meet the Team</h2>
        <div className="team-cards-container">
          {memberJSON.content.map(data => (
            <TeamCard {...data}
              key={data.memberName.toLowerCase()}
            />
          ))}
        </div>
      </div>
    </div>
  </main>
);

export default IndexPage
