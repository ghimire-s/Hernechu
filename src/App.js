import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { BrowserRouter as Router } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      appName: "Hernucha",
    };
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="row">
            <Header appName={this.state.appName} />
            <Body></Body>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}
