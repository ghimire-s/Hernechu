import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header";

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
        <div className="row">
          <Header appName={this.state.appName} />
        </div>
      </React.Fragment>
    );
  }
}
