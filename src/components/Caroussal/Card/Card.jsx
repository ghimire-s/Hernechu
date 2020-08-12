import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./card.css";

export default class MovieCard extends Component {
  render() {
    let linkLocation = `\/${this.props.movieName}`;
    console.log(linkLocation);

    return (
      <div className="movieCard">
        <Link to={linkLocation}>
          <div className="movieImage">
            <img className="movieImage" src={this.props.movieImage}></img>
          </div>
        </Link>
        <div>
          <h5>{this.props.movieName}</h5>
        </div>
      </div>
    );
  }
}
