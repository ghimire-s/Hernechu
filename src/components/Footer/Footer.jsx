import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    name: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    },
}));

const Footer = () => {
    const classes = useStyle();
    return (
        <Paper elevation={3}>
            <Typography className={classes.name}> Hernucha@</Typography>
        </Paper>
    )
}

export default Footer
