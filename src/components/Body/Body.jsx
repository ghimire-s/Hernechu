
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import About from "../About/About";
import Home from "../Home/Home";
import Songs from "../Songs/Songs";
import Trailers from '../Trailers/Trailers';

const useStyles = makeStyles(() => ({
    root: {
        minHeight: '100%'
    }
}));


export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayIndividual: false
        };
    }

    render() {
        const classes = useStyles();
        return (
            <div className={classes.root}>
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
}








