import * as React from "react";

import "./TeamCard.scss";

const TeamCard = props => (
  <div className="team-card">
    <div className="team-card-avatar">
      <img
        src={props.memberAvatar}
        alt={`${props.memberName} avatar`}
        className="team-card-avatar-img"
      />
    </div>
    <div className="team-card-text">
      <h3 className="team-card-name">
        {props.memberName}
      </h3>
      <h4 className="team-card-role">
        {props.memberRole}
      </h4>
      <p className="team-card-description">
        {props.memberDescription}
      </p>
    </div>
  </div>
);

export default TeamCard;