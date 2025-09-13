import { Layout, Listing } from "@components";
import "./index.scss";

const App = () => {
  console.log("root app rendering");
  return (
    <Layout>
      <Listing />
    </Layout>
  );
};

export default App;
