import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Class from "./Class";
import App from "./App";
import Schedule from "./Schedule";
import Swap from "./Swap";
import Profile from "./Profile";
import To from "./To";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
