import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    wrapper: {
        position: 'relative',
        paddingTop: '56.25%', /* 720 / 1280 = 0.5625 */
    },
    player: {
        position: 'absolute',
        top: '0',
        left: '0'
    }
}))

const YoutubePlayer = (props) => {
    const classes = useStyles();
    const { url } = props
    return (
        <Paper
            className={classes.wrapper}
            elevation={10}>
            <ReactPlayer url={url}
                width='100%'
                height='100%'
                className={classes.player}
                onStart={() => console.log('started')}
                config={{

                    youtube: {
                        playerVars: { controls: 1 }
                    },
                }} />
        </Paper>
    )
}

YoutubePlayer.defaultProps = {
    url: 'https://www.youtube.com/watch?v=I_N5CKgs6_k'
}

export default YoutubePlayer;