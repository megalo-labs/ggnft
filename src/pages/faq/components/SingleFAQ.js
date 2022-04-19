import React from "react";

import "./SingleFAQ.scss";

const SingleFAQ = props => (
  <div className="single-faq">
    <details>
      <summary>
        <h2 className="question">{props.question}</h2>
      </summary>
      <p className="answer">{props.answer}</p>
    </details>
  </div>
);

export default SingleFAQ;