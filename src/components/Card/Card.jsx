import React from "react";
import data from '../../data.json';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        overflow: 'hidden',
        // backgroundColor: theme.palette.background.paper,
        borderRadius: '20px'

    },

}));
const MyCard = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card>
                <CardMedia
                    component="img"
                    image={data[0].image}
                    title="Live from space album cover"
                >
                </CardMedia>
            </Card>
        </div>
    )
}

export default MyCard;

