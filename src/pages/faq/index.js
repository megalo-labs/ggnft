import * as React from "react";
import Helmet from "react-helmet";
import FAQJSON from "../../../content/faq.json";
import Columns from "../../components/columns/Columns";
import SingleFAQ from "./components/SingleFAQ";

import "./index.scss";

const FAQPage = () => (
  <main className="faq">
    <Helmet>
      <meta charSet="utf-8" />
      <title>FAQ | GABAGHOULS NFT</title>
    </Helmet>
    <Columns />
    <h1>FAQ</h1>
    <h2 className="drop-tip">Click a question to see the answer</h2>
    {FAQJSON.content.map((item, idx) => (
      <SingleFAQ
        question={item.question}
        answer={item.answer}
        key={idx}
      />
    ))}
  </main>
);

export default FAQPage;