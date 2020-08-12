import React, { Component } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Trailers from "../Trailers/Trailers";
import Movies from "../Movies/Movies";
import Songs from "../Songs/Songs";
import Home from "../Home/Home";
import About from "../About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-light">
          <div className="container">
            <Link to="/" className="nav-link">
              <Logo siteName={this.props.appName} />
            </Link>

            <Navbar />
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/trailers">
                <Trailers />
              </Route>
              <Route path="/songs">
                <Songs />
              </Route>
              <Route path="/movies">
                <Movies />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </nav>
      </Router>
    );
  }
}
