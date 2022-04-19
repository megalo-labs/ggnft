import React from "react";

import "./RoadMapSection.scss";

const RoadMapSection = props => {
  const listMapper = (item, idx) => {
    if (typeof item == "object") {
      return (
        <li key={idx}>
          {item[0]}
          <ul>
            {item.slice(1).map(listMapper)}
          </ul>
        </li>
      );
    }
    else {
      return (<li key={idx}>{item}</li>);
    }
  }

  return (
    <div className="roadmap-section">
      <details>
        <summary>
          <h2>{props.sectionTitle}</h2>
          <p>{props.sectionContent}</p>
        </summary>
        <ul>{props.sectionSummary.map(listMapper)}</ul>
      </details>
    </div>
  );
}

export default RoadMapSection;