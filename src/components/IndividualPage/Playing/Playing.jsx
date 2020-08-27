import React from 'react';
import { Typography, ListItem } from '@material-ui/core';
import MyCard from '../../Card/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(3)
    },
    title: {
        paddingBottom: theme.spacing(1)
    }
}))

const Playing = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography
                className={classes.title}
                variant="h6"
            >
                Playing
                    </Typography>
            <ListItem>
                {props.streaming.map((item) => (
                    <div key={item}>
                        <MyCard
                            key={`card${item}`}
                            name={Object.keys(item)[0]}
                            image={item[Object.keys(item)[0]]}
                        />
                    </div>
                ))}
            </ListItem>
        </div>
    )
}

Playing.defaultProps = {
    streaming: [
        {
            youtube: "https://cdn2.iconfinder.com/data/icons/social-icons-color/512/youtube-512.png"
        }
    ]
}

export default Playing;