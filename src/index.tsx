import ReactDOM from "react-dom";

import { Layout } from "./components";
import { Features } from "./features";
import { Providers } from "./providers";

ReactDOM.render(
  <Providers>
    <Layout>
      <Features />
    </Layout>
  </Providers>,
  document.getElementById("root")
);
