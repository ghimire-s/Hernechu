
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import About from "../About/About";
import Home from "../Home/Home";
import Songs from "../Songs/Songs";
import Trailers from '../Trailers/Trailers';

const useStyles = makeStyles(() => ({
    root: {
        minHeight: '100%',
    }
}));


const Body = (props) => {
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
                    <Home
                        data={props.movieData}
                        card={props.individualState}
                        click={props.card}
                        pickSelection={props.pickSelection}
                        selected={props.selected}
                        handleAlignment={props.handleAlignment} />
                </Route>
            </Switch >
        </div >
    )
}



export default Body





