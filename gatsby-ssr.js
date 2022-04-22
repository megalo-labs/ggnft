import * as React from "react";

import Layout from "./src/layouts/Layout";

export const wrapPageElement = ({ element, props }) => {
  return (props.location.pathname !== '/admin/') ?
    (<Layout>
      {element}
    </Layout>) :
    (<div className="protected-wrapper">{element}</div>);
}