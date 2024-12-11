import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routes from "./Routes.jsx";
//import App from "./App.jsx";
//import App from "../src/components/Shark-side/App.jsx";
// import Entrypoint from "./components/Entrypoint.jsx";
// import Dashboard from "./components/Dashboard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Routes />
  </StrictMode>
);
