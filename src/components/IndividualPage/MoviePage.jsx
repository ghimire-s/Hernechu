import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import IndividualCard from './IndividualCard/IndividualCard';
import { useDispatch } from 'react-redux';
import { fetchMovie } from '../../actions/movieAction';
import { makeStyles } from '@material-ui/core/styles';
import Playing from './Playing/Playing';
import MovieInfo from './MovieInfo/MovieInfo';
import Hidden from '@material-ui/core/Hidden';
import MovieCastnCrew from './MovieCastnCrew/MovieCastnCrew';
import Songs from './Songs/Songs';

const useStyles = makeStyles((theme) => ({
    skeleton: {
        width: 300,
        height: 50,
    },
    spacing: {
        [theme.breakpoints.up('sm')]: {
            padding: '50px',
        },
        padding: '20px'
    }
}));

const MoviePage = (props) => {
    const classes = useStyles();
    const [movie, setMovieData] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        setMovieData(dispatch(fetchMovie(props.indiviualMovieName)).payload);
    }, []);
    return (
        <div>
            {movie[0] ?
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <IndividualCard
                            movieInfo={movie}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid
                            container
                            direction="column"
                            justify="space-between"
                            alignItems="flex-start">
                            {[1, 2].map((item) => (
                                <Hidden only="xs" key={item}>
                                    <Grid item sm={2} key={item}>
                                        <div className={classes.spacing}>

                                        </div>
                                    </Grid>
                                </Hidden>
                            ))}
                            <Grid item xs={12}>
                                <MovieInfo movie={movie} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <MovieCastnCrew movie={movie} />
                    </Grid>
                    <Grid item xs={12}>
                        <Playing streaming={movie[0].streaming} />
                    </Grid>
                    <Grid item xs={12}>
                        <Songs songs={movie[0].songs} />
                    </Grid>
                </Grid> :
                <div></div>}
        </div >
    )
}

export default MoviePage;