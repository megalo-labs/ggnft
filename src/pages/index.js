import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";

import "./index.scss";

// markup
const IndexPage = () => {
  return (
    <main>
      <div className="main-container">
        <header>
          <StaticImage
            src="../images/full.png"
            alt="gabaghouls"
            className="full-logo"
          />
        </header>
      </div>
    </main>
  )
}

export default IndexPage
