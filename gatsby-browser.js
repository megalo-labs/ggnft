import * as React from "react";

import Layout from "./src/layouts/Layout";

export const wrapPageElement = ({ element, props }) => {
  return (props.location.pathname !== '/admin/') ?
    (<Layout>
      {element}
    </Layout>) :
    (<div
      className="protected-wrapper"
      style={{ "width": "100%", minHeight: "100vh" }}
    >
      {element}
    </div>);
}