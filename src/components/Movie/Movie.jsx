import React, { Component } from "react";

export default class MovieIndividual extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.movieName}</h1>
      </div>
    );
  }
}
