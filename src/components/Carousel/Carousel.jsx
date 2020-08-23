import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import data from '../../data.json';
import MyCard from '../Card/Card';
import { IconButton, GridList, GridListTile, ListItem } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import useMediaQuery from '@material-ui/core/useMediaQuery';



const useStyles = makeStyles((theme) => ({
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
        [theme.breakpoints.down('xs')]: {
            paddingRight: '12px'
        }
    },
    tile: {
        [theme.breakpoints.down('xs')]: {
            width: '20%',
        },
        width: '13%'
    }

}));

const Carousel = () => {
    const classes = useStyles();
    const movieScrollBox = React.useRef();
    let [leftArrow, setleftArrow] = useState(false);
    let [rightArrow, setRightArrow] = useState(true);
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const mobileScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const scrollRight = () => {
        movieScrollBox.current.scrollLeft += 200;
        setleftArrow(true)
        if (movieScrollBox.current.scrollLeft === movieScrollBox.current.scrollLeftMax) {
            setRightArrow(false)
        }
    }
    const scrollLeft = () => {
        movieScrollBox.current.scrollLeft -= 200;
        if (movieScrollBox.current.scrollLeft === 0) {
            setleftArrow(false)
        }
        setRightArrow(true)
    }

    const arrowBack = <IconButton size={smallScreen ? "small" : "medium"} onClick={scrollLeft}>
        <ArrowBackIosIcon fontSize={smallScreen ? "small" : "large"} />
    </IconButton>
    const arrowForward = <IconButton size={smallScreen ? "small" : "medium"} variant="outlined" onClick={scrollRight}>
        <ArrowForwardIosIcon fontSize={smallScreen ? "small" : "large"} />
    </IconButton>
    return (
        <div className={classes.root}>
            <ListItem>
                {smallScreen ? <div></div> : leftArrow ? arrowBack : <div />}
                <GridList className={classes.gridList} cellHeight={mobileScreen ? 200 : 350} cols={smallScreen ? 2.5 : 6.5} ref={movieScrollBox}>
                    {data.map((tile) => (
                        <GridListTile key={tile.name} >

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
                {smallScreen ? <div></div> : rightArrow ? arrowForward : <div />}
            </ListItem>
        </div >
    );
}


export default Carousel