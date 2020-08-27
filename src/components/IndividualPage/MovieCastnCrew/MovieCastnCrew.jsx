import React from 'react';
import { Typography, Card, CardMedia, CardActionArea, GridList, GridListTile } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(3)
    },
    card: {
        borderRadius: 12,
        [theme.breakpoints.down('xs')]: {
            maxWidth: '100px'
        },
        maxWidth: '400px'
    },
    gridRoot: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,

    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        fontSize: '0.7rem',
        textAlign: 'center',
        marginLeft: theme.spacing(-2),
        overflow: 'hidden',
    }
}))

const MovieCastnCrew = (props) => {
    const skeleton = <div>
        <Skeleton variant="rect" width={210} height={118} />
    </div>
    const { movie } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h6">
                Cast n Crew
            </Typography>
            <div className={classes.gridRoot}>
                <GridList
                    className={classes.gridList}
                    cellHeight={170}
                    cols={2.5}
                >
                    {movie[0] ?
                        movie[0].actor.map((item, index) => (
                            <GridListTile key={index} >
                                <Card elevation={3} className={classes.card} key={`card${index}`}>
                                    <CardActionArea key={index}>
                                        <CardMedia key={item}
                                            component="img"
                                            image={item.image}
                                            title={item.name}
                                        >
                                        </CardMedia>
                                    </CardActionArea>
                                </Card>
                                <Typography variant="body2"
                                    key={item.name}
                                    className={classes.title}
                                >
                                    {item.name}
                                </Typography>
                            </GridListTile>
                        )) :
                        skeleton}
                </GridList>
            </div>
        </div >
    )
}

MovieCastnCrew.defaultProps = {
    movie: [{
        actor: [
            {
                name: "Reecha Sharma",
                image: "https://image.tmdb.org/t/p/original/1f8Y1jAxZdWPPEbfmlrK48iIqFl.jpg"
            },
            {
                name: "Rabindra Singh Baniya",
                image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6mCNFvFRBJkSLzVOlrtYLFfhKAW.jpg"
            },
            {
                name: "Bipin Karki",
                image: "https://image.tmdb.org/t/p/original/f0ZvIc6njIgBAqlfinM9obQCYow.jpg"
            },
            {
                name: "Saugat Malla",
                image: "https://image.tmdb.org/t/p/original/pbIOAtHytaDkd0nQGG9OPb5jUHN.jpg"
            },
            {
                name: "Dayahang Rai",
                image: "https://image.tmdb.org/t/p/original/ySK3NIzPYA4aYsGhPd17me29TsJ.jpg"
            },
            {
                name: "Saugat Malla",
                image: "https://image.tmdb.org/t/p/original/pbIOAtHytaDkd0nQGG9OPb5jUHN.jpg"
            },
            {
                name: "Dayahang Rai",
                image: "https://image.tmdb.org/t/p/original/ySK3NIzPYA4aYsGhPd17me29TsJ.jpg"
            }
        ]
    }]
}
export default MovieCastnCrew;