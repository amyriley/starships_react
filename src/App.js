import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MoreDetailsPage from "./pages/MoreDetailsPage";
import StarshipOverviewContainer from "./containers/StarshipOverviewContainer";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <StarshipOverviewContainer />
            </Route>
            <Route path="/more-details" component={MoreDetailsPage}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
