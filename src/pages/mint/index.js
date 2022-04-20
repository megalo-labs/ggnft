import * as React from "react";
import Helmet from "react-helmet";
import Columns from "../../components/columns/Columns";

import "./index.scss";

const MintPage = () => (
  <main className="mint">
    <Helmet>
      <meta charSet="utf-u" />
      <title>MINT | GABAGHOULS NFT</title>
    </Helmet>
    <Columns />
    <h1>Mint</h1>
    <div className="coming-soon">
      <div>
        <h2>Coming Soon!</h2>
        <p>To get early access, head over to our socials to enter one of the 1/1 giveaways!</p>
      </div>
    </div>
  </main>
);

export default MintPage;