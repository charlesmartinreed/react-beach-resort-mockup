import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { RoomProvider } from "./context";

// CONTEXT API
ReactDOM.render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>,
  document.getElementById("root")
);
