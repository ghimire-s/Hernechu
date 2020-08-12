import React, { Component } from "react";

export default class Movie extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.movieName}</h1>
      </div>
    );
  }
}
