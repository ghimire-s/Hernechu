import React from 'react';
import ReactPlayer from 'react-player/youtube'
import { Card, CardMedia } from '@material-ui/core';

const YoutubePlayer = () => {
    return (
        <ReactPlayer url='https://www.youtube.com/watch?v=CNulKfDOKVc'
            width='100%'
            height='200px'
            config={{
                youtube: {
                    playerVars: { showinfo: -1, controls: 0 }
                },
            }} />
    )
}

export default YoutubePlayer;