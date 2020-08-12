import React, { Component } from "react";
import "./card.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class MovieCard extends Component {
  render() {
    let link_value = `\/${this.props.movieName}`;
    return (
      <div className="movieCard">
        <div className="movieImage">
          <img className="movieImage" src={this.props.movieImage}></img>
        </div>
        <div>
          <h5>{this.props.movieName}</h5>
        </div>
      </div>
    );
  }
}
