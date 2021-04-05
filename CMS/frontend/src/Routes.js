import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

// import Home_Page from "./home-page/App";
import Landing_Page from "./landing-page/App";
// import Club_Page from "./club-page/App";
// import Events_Page from "./events-page/App";
// import Form_Page from "./form-page/App";
// import Club_Form_Page from "./club-form/App";

import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          {/* <Route path="/home" exact component={Home_Page} /> */}
          <Route path="/" exact component={Landing_Page} />
          {/* <Route path="/club/:name" exact component={Club_Page} /> */}
          {/* <Route path="/event/:id" exact component={Events_Page} />
          <Route path="/form" exact component={Form_Page} /> */}
          {/* <Route path="/clubform" exact component={Club_Form_Page} /> */}
        </Switch>
      </Router>
    );
  }
}
