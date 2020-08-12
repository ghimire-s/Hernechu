import React, { Component } from "react";
import MovieCard from "./Card/Card";
import "./carrousal.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieIndividual from "../Movie/Movie";

export default class Carrousal extends Component {
  render() {
    const card = this.props.data.map((item, index) => (
      <MovieCard movieName={item.name} movieImage={item.image} key={index} />
    ));
    return (
      <div className="Slider">
        <h1 className="Slider-title">{this.props.title}</h1>
        <div className="carr">{card}</div>
      </div>
    );
  }
}
