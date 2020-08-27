import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
        borderRadius: 12,
        [theme.breakpoints.down('xs')]: {
            maxWidth: '200px'
        },
        maxWidth: '400px'

    },

}));

const IndividualCard = (props) => {
    const { movieInfo } = props
    const classes = useStyles();
    const skeleton = <div>
        <Skeleton variant="rect" width={210} height={118} />
    </div>
    return (
        <div>
            {
                movieInfo[0] ?
                    <Card elevation={3} className={classes.root}>
                        <CardMedia
                            component="img"
                            image={movieInfo[0].image}
                            title="Live from space album cover"
                        >
                        </CardMedia>
                    </Card> :
                    skeleton
            }
        </div>
    )
}
IndividualCard.defaultProps = {
    movieInfo: [{ image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/roOpVRDNorjxJTdBTuDBMtI6WVk.jpg" }]
}

export default IndividualCard