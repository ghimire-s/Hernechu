import React from 'react';
import './Logo.css';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Logo = (props) => {
    const classes = useStyles();
    return (
        <Typography variant="h6" className={classes.title}>
            {props.websiteName}
        </Typography>
    )

}

Logo.defaultProps = {
    websiteName: "Hernucha"
};
export default Logo;