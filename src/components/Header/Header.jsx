import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NavBar from './NavBar/NavBar';
import Logo from './Logo/Logo';
import { navBar, webSiteName } from '../../website';


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    }
}));

const Header = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar>
                    <Logo websiteName={webSiteName} />
                    <NavBar navItem={navBar} full={props.full} selection={props.selection}/>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;