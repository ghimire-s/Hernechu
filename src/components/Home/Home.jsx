import React, { Component } from "react";
import "./home.css";
import Carrousal from "../Caroussal/Carrousal";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
        <div className="tile-container">
          <Carrousal
            className="carrousal"
            title="Movies"
            data={this.props.data}
            key="1"
          ></Carrousal>
          <Carrousal
            className="carrousal"
            title="Songs"
            data={this.props.data}
            key="2"
          ></Carrousal>
          <Carrousal
            className="carrousal"
            title="Trailers"
            data={this.props.data}
            key="3"
          ></Carrousal>
        </div>
      </React.Fragment>
    );
  }
}
