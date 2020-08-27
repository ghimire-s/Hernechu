import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Button, ListItem, IconButton } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(3)
    },
    button: {
        color: theme.palette.primary.contrastText,
        marginRight: '1rem',
        borderRadius: '7px',
        background: theme.palette.primary.main
    },
    list: {
        paddingLeft: '0px',
        paddingTop: '0px',
    },
    iconbutton: {
        marginRight: '1rem',
        color: theme.palette.primary.main
    },
    stylingBox: {
        width: '20%',
        height: '20px',
        borderRadius: '2px'

    },
    trailer: {
        padding: '0px',
        paddingBottom: theme.spacing(2)
    }
}));

const MovieInfo = (props) => {
    const { movie } = props;
    const theme = useTheme()
    const notMobile = useMediaQuery(theme.breakpoints.up('sm'));
    const classes = useStyles();
    const skeleton = <div>
        <Skeleton variant="rect" width={210} height={118} />
    </div>
    return (
        <div className={classes.root}>
            {movie[0] ?
                <Grid
                    container
                    direction="row"
                >
                    <Grid item xs={12}>
                        <Typography variant={notMobile ? "h4" : "h6"}>
                            {`${props.movie[0].name}`}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ListItem className={classes.list} >
                            <IconButton size='small' className={classes.iconbutton}>
                                <Typography variant={notMobile ? "subtitle1" : "subtitle2"}>
                                    {props.movie[0].year}
                                </Typography>
                            </IconButton>
                            <IconButton size='small' className={classes.iconbutton}>
                                <Typography variant={notMobile ? "subtitle1" : "subtitle2"}>
                                    {props.movie[0].rating}
                                </Typography>
                            </IconButton>

                            <Typography variant={notMobile ? "subtitle1" : "subtitle2"}>
                                {props.movie[0].length}
                            </Typography>
                        </ListItem>
                        <Grid item xs={12} >
                            <ListItem className={classes.list}>
                                <IconButton
                                    className={classes.trailer}
                                    color="primary"
                                >
                                    <YouTubeIcon />
                                    <Typography variant={notMobile ? "subtitle1" : "subtitle2"}>
                                        Trailer
                            </Typography>
                                </IconButton>
                            </ListItem>
                        </Grid>

                        <Grid container >
                            <Grid item xs={12}>
                                <ListItem className={classes.list}>
                                    {props.movie[0].genre.map((item) => (
                                        <Button
                                            key={item}
                                            className={classes.button}
                                            variant="contained"
                                            size="small"
                                        >
                                            {item}
                                        </Button>
                                    ))}
                                </ListItem>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                :
                skeleton}
        </div>
    )
}

MovieInfo.defaultProps = {
    movie: [{
        name: 'Loot',
        genre: ['drama', 'Horror', 'Fanatasy'],
        year: '2017',
        length: '2h 18m',
        rating: 'PG'
    }]
}

export default MovieInfo;