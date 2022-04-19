import * as React from "react";
import Helmet from "react-helmet";
import RoadMapSection from "./components/RoadMapSection";
import Columns from "../../components/columns/Columns";

import roadMapJSON from "../../../content/roadmap.yaml";

import "./index.scss";

const RoadMapPage = () => (
  <main className="roadmap">
    <Helmet>
      <meta charSet="utf-8" />
      <title>ROADMAP | GABAGHOULS NFT</title>
    </Helmet>
    <Columns />
    <h1>Roadmap</h1>
    <h2 className="drop-tip">Click an entry to see more</h2>
    <div className="roadmap-sections">
      {roadMapJSON.content.map(data => (
        <RoadMapSection
          key={data.sectionTitle}
          sectionTitle={data.sectionTitle}
          sectionContent={data.sectionContent}
          sectionSummary={data.sectionSummary}
        />
      ))}
    </div>
  </main>
);

export default RoadMapPage;