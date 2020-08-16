import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CopyrightIcon from '@material-ui/icons/Copyright';
const useStyle = makeStyles((theme) => ({
    root: {
        color: theme.palette.text.secondary,
        background: theme.palette.success.light,
    },
    name: {
        textAlign: 'center',
    },
    grid: {
        padding: theme.spacing(1),
        justify: "center",

    }
}));

const Footer = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Grid>
                <Grid item xs={1} container direction="row" alignItems="center" className={classes.grid}>
                    <Typography className={classes.name}>Hernucha</Typography>
                    <CopyrightIcon fontSize="small" />
                </Grid>

            </Grid>
        </div >
    )
}

export default Footer
