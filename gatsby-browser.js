import * as React from "react";

import Layout from "./src/layouts/Layout";

export const wrapRootElement = ({ element }) => (
  <Layout>
    {element}
  </Layout>
);