import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") || document.createElement("div"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
