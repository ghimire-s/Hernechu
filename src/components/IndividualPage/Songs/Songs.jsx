import React from 'react';
import { Typography, ListItem, ListItemText, List, Paper } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(3),
        paddingLeft: theme.spacing(2),
    },
    list: {
        width: '100%',
        maxWidth: 1220,
        backgroundColor: theme.palette.background.paper,
    },
    music: {
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,

        },
    },
    selected: {},
    paper: {
        borderRadius: '12px',
        marginBottom: theme.spacing(1),
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,

        },
    },
}))

const Songs = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography
                variant="h6">
                Songs
                </Typography>
            <List className={classes.list}>
                {props.songs.map((item) => (
                    <Paper
                        className={classes.paper}
                        elevation={3}
                        key={item}
                    >
                        <ListItem
                            key={item}
                            classes={{ root: classes.music, selected: classes.selected }}>
                            <ListItemText id="play-list-label-songs" primary={item} />
                            <IconButton edge="end" aria-label="music" key={item}>
                                <PlayCircleOutlineIcon key={item} />
                            </IconButton>
                        </ListItem>
                    </Paper>
                ))
                }
            </List>
        </div >
    )
}
Songs.defaultProps = {
    songs: [
        "Dui Rupaiyaa",
        "Kutu Ma Kutu",
        "Talkyo Jawani"
    ]
}
export default Songs;