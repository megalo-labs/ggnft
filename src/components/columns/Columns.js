import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import "./Columns.scss";

const Column = props => (
  /**
   * right-hand column is flipped and put on the right
   */
  <div className={`column ${props.hand}`}>
    <StaticImage
      src="../../images/columns/column_top.png"
      alt="column-top"
      className="column-top"
      imgClassName="column-img-top"
    />
    <StaticImage
      src="../../images/columns/column_mid.png"
      alt="column-mid"
      className="column-mid"
      imgClassName="column-img-mid"
      objectFit="fill"
    />
    <StaticImage
      src="../../images/columns/column_bot.png"
      alt="column-bot"
      className="column-bot"
      imgClassName="column-img-bot"
    />
  </div>
);

const Columns = () => (
  <div className="columns">
    <Column hand="left" />
    <Column hand="right" />
  </div>
);

export default Columns;