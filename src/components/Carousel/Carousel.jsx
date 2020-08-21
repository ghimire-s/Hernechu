import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import data from '../../data.json';
import MyCard from '../Card/Card';
import { IconButton, GridList, GridListTile } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = (theme) => ({
    root: {
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
        color: theme.palette.text.primary,
        textAlign: 'center',
        paddingTop: '4px',
    },

});

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.movieScrollBox = React.createRef();
        this.state = {
            displayIndividual: false
        };
        this.scrollRight = this.scrollRight.bind(this);
        this.scrollLeft = this.scrollLeft.bind(this);
    }
    scrollRight() {
        this.movieScrollBox.current.scrollLeft += 200;
    }
    scrollLeft() {
        this.movieScrollBox.current.scrollLeft -= 200;
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <IconButton size="medium" onClick={this.scrollLeft}>
                    <ArrowBackIosIcon fontSize="large" />
                </IconButton>
                <GridList className={classes.gridList} cellHeight={350} cols={4.5} ref={this.movieScrollBox}>

                    {data.map((tile) => (
                        <GridListTile key={tile.name}>

                            <MyCard
                                key={tile.image}
                                image={tile.image}
                            />
                            <Typography
                                key={tile.name}
                                className={classes.title}
                            >
                                {tile.name}
                            </Typography>

                        </GridListTile>
                    ))}

                </GridList>
                <IconButton size="medium" variant="outlined" onClick={this.scrollRight}>
                    <ArrowForwardIosIcon fontSize="large" />
                </IconButton>
            </div >
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(Carousel)