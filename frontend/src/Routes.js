import React, { Component } from "react";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";

import Home_Page from "./home-page/App";
import Landing_Page from "./landing-page/App";
import Student_Page from "./student-page/App";
import Club_Page from "./club-page/App";
import Events_Page from "./events-page/App";
import Form_Page from "./form-page/App";
import Club_Form_Page from "./club-form/App";

import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <div>
          <Switch>
            <Route path="/home" exact component={Home_Page} />
            <Route path="/" exact component={Landing_Page} />
            <Route path="/student" exact component={Home_Page} />
            <Route path="/club/:name" component={Club_Page} />
            <Route path="/event/:id" exact component={Events_Page} />
            <Route path="/form" exact component={Form_Page} />
            <Route path="/clubform" exact component={Club_Form_Page} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
