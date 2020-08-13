import React, { Component } from "react";
import "./card.css";

export default class Card extends Component {
    render() {
        return (
            <div className="movieCard">
                <div className="movieImage">
                    <img className="movieImage" src={this.props.movieImage} alt={this.props.movieName}></img>
                </div>
                <div>
                    <h5>{this.props.movieName}</h5>
                </div>
            </div>
        )
    }
}
