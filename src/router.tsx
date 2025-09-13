import { createBrowserRouter } from "react-router-dom";

import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    loader: () => <div>ROOT LOADER</div>,
    children: [],
  },
]);

export default router;
