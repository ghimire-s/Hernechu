
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import About from "../About/About";
import Home from "../Home/Home";
import Songs from "../Songs/Songs";
import Trailers from '../Trailers/Trailers';


const Body = () => {
    return (
        <div>
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
                <Route path="/">
                    <Home />
                </Route>
            </Switch >
        </div >
    )
}

export default Body;





