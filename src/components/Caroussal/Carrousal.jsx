import React, { Component } from "react";
import MovieCard from "./Card/Card";
import "./carrousal.css";
import Movie from "../Movie/Movie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Carrousal extends Component {
  render() {
    const card = this.props.data.map((item, index) => {
      let path_value = `/\${item.name}`;
      return (
        <div key={item.name}>
          <Link to={path_value}>
            <div className="carr" key={item.name}>
              <MovieCard movieName={item.name} movieImage={item.image} />
            </div>
          </Link>
          <Switch>
            <Route path={path_value}>
              <Movie movieName={item.name} key={item.movieName} />
            </Route>
          </Switch>
        </div>
      );
    });
    return (
      <Router>
        <div className="Slider">
          <h1 className="Slider-title">{this.props.title}</h1>
          {card}
        </div>
      </Router>
    );
  }
}
