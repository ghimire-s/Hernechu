import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import data from '../../data.json';

import Box from '@material-ui/core/Box';

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
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    paper: {
        paddingRight: '40'
    }

}));

const Carousel = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                {data.map((tile) => (
                    <>
                        <Box m="2rem" />
                        <Box
                            elevation={3}
                            boxShadow={10}

                        >
                            <img style={{ borderRadius: "10px" }} src={tile.image} alt={tile.name} className={classes.image} />
                        </Box>
                    </>
                ))}
            </GridList>
        </div>
    );
}

export default Carousel