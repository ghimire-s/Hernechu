import React, { Component } from "react";
import Search from "../Search/Search";
import "./movies.css";

export default class Movies extends Component {
  render() {
    return (
      <div>
        <Search />
        <h1 className="movies">Movies</h1>
      </div>
    );
  }
}
