import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./css/index.css";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route path="/news">
        <NewsFeed />
      </Route> */}
    </div>
  </Router>,
  document.getElementById("root")
);
