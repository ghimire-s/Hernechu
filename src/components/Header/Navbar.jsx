import React, { Component } from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item ml-5">
                  <Link to="/Movies" className="nav-link">
                    Movies
                  </Link>
                </li>
                <li className="nav-item ml-5">
                  <Link to="/Trailers" className="nav-link">
                    Trailers
                  </Link>
                </li>
                <li className="nav-item ml-5">
                  <Link to="/Songs" className="nav-link">
                    Songs
                  </Link>
                </li>
                <li className="nav-item ml-5">
                  <Link to="/About" className="nav-link">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
