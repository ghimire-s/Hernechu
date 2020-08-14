import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './NavBar.css';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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

const NavBar = (props) => {
    const { history } = props;
    const theme = useTheme();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (openUrl) => {
        history.push(openUrl);
        setAnchorEl(null);
    };

    return (
        <div>
            {isMobile ? (<><IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
            >
                <MenuIcon />
            </IconButton>

                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                >
                    <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/Songs')}>Songs</MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/Trailers')}>Trailers</MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/About')}>About</MenuItem>
                </Menu></>)
                :
                (<>
                    <Button variant="contained" className={classes.menuButton} onClick={() => handleMenuClick('/')}>
                        <Typography>
                            Home
                               </Typography>
                    </Button>
                    <Button variant="contained" className={classes.menuButton} onClick={() => handleMenuClick('/Trailers')}>
                        <Typography>
                            Trailers
                               </Typography>
                    </Button>
                    <Button variant="contained" className={classes.menuButton} onClick={() => handleMenuClick('/Songs')}>
                        <Typography>
                            Songs
                           </Typography>
                    </Button>
                    <Button variant="contained" className={classes.menuButton} onClick={() => handleMenuClick('/About')}>
                        <Typography>
                            About
                       </Typography>
                    </Button>
                </>)
            }

        </div>
    )
}



NavBar.defaultProps = {
    navItem: ['Home', 'Trailers', 'Songs', 'About']
}

export default withRouter(NavBar);

