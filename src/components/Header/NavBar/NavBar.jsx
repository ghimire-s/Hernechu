import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    }
}));

const NavBar = (props) => {
    const { navItem } = props;
    const classes = useStyles();
    const mobileMenuItem = navItem.map((item) => (
        <MenuItem onClick={() => handleMenuClick(item === 'Home' ? `/` : `/${item}`)} key={item}>{item}</MenuItem>
    ))
    const nonMobileMenuItem = navItem.map((item) => (
        <Button variant="contained" className={classes.menuButton} onClick={() => handleMenuClick(item === 'Home' ? `/` : `/${item}`)} key={item}>
            <Typography>
                {item}
            </Typography>
        </Button>
    ))
    const { history, full, selection } = props;
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (openUrl) => {
        history.push(openUrl);
        if (openUrl === '/') { selection('All') };
        full();
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
                    {mobileMenuItem}
                </Menu></>)
                :
                (<>
                    {nonMobileMenuItem}

                </>)
            }

        </div>
    )
}



NavBar.defaultProps = {
    navItem: ['Home', 'Trailers', 'Songs', 'About']
}

export default withRouter(NavBar);

