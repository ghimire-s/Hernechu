import React from "react";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: 8,
        [theme.breakpoints.down('xs')]: {
            maxWidth: '100px'
        },
        maxWidth: '200px'

    },

}));
const MyCard = (props) => {
    const classes = useStyles();
    return (
        <Card elevation={3} className={classes.root} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={props.image}
                    title="Live from space album cover"
                >
                </CardMedia>
            </CardActionArea>
        </Card>

    )
}
MyCard.defaultProps = {
    image: 'https://image.tmdb.org/t/p/w220_and_h330_face/d9pQHVVf2FbfY6ayPM7qseVLc5K.jpg'
}

export default MyCard;

