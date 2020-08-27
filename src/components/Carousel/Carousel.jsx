import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import MyCard from '../Card/Card';
import data from '../../data.json';
import { IconButton, GridList, GridListTile, ListItem } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const das = data
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

const Carousel = (props) => {
    const classes = useStyles();
    const movieScrollBox = React.useRef();
    let [leftArrow, setleftArrow] = useState(false);
    let [rightArrow, setRightArrow] = useState(true);
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const mobileScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const largeScreen = useMediaQuery(theme.breakpoints.up('xl'));
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

    const arrowBack = <IconButton size={"medium"} onClick={scrollLeft}>
        <ArrowBackIosIcon fontSize={"large"} />
    </IconButton>
    const arrowForward = <IconButton size={"medium"} variant="outlined" onClick={scrollRight}>
        <ArrowForwardIosIcon fontSize={"large"} />
    </IconButton>
    return (
        <div className={classes.root}>
            <ListItem>
                {smallScreen ? <div></div> : leftArrow ? arrowBack : <div />}
                <GridList
                    spacing={props.data ? 7 : 20}
                    className={classes.gridList}
                    cellHeight={smallScreen ? mobileScreen ? 200 : 270 : 350}
                    cols={smallScreen ? mobileScreen ? 2.5 : 4.5 : props.data.length < 3.5 ? props.data.length : largeScreen ? 6.5 : 4.5}
                    ref={movieScrollBox}
                >
                    {props.data ? props.data.map((tile) => (
                        <GridListTile key={tile.name} >

                            <MyCard
                                key={tile.image}
                                image={tile.image}
                                card={props.card}
                                name={tile.name}
                            />
                            <Typography
                                key={tile.name}
                                className={classes.title}
                            >
                                {tile.name}
                            </Typography>
                        </GridListTile>
                    )) : [1, 2, 3].map((tile) => (
                        <GridListTile key={tile}>
                            <Skeleton variant="rect" width={200} height={200} key={`skeleton${tile}`} />
                            <Skeleton animation="wave" key={`wave${tile}`} />
                        </GridListTile>
                    ))
                    }
                </GridList>
                {smallScreen ? <div></div> : rightArrow ? arrowForward : <div />}
            </ListItem>
        </div >
    );
}
Carousel.defaultProps = {
    data: das
}

export default Carousel