
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import About from "../About/About";
import Home from "../Home/Home";
import Songs from "../Songs/Songs";
import Trailers from '../Trailers/Trailers';

const useStyles = () => ({
    root: {
        minHeight: '100%'
    }
});


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayIndividual: false
        };
    }

    render() {
        const { classes } = this.props
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


export default withStyles(useStyles, { withTheme: true })(Body)





