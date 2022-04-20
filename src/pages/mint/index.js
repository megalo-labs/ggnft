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
        <p>Get ready for the family feast! The smorgasbord drop of 7,500 GabaGhouls coming soon 👻</p>
      </div>
    </div>
  </main>
);

export default MintPage;