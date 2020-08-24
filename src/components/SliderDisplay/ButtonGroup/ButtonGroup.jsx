import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles((theme) => ({
    button: {
        marginLeft: theme.spacing(3)
    },
}))

const StyledButton = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.main,
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        '&:hover': {
            background: theme.palette.secondary.main,
        }
    },
    selected: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        '&:hover': {
            background: theme.palette.primary.light,
        }
    },
}));

const MyButtonGroup = (props) => {
    const classes = useStyle();
    const cla = StyledButton();
    const [alignment, setAlignment] = React.useState('');
    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
        props.selection(newAlignment)
    };
    return (
        <div>
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="movies showcase"
                className={classes.button}
            >
                {
                    props.button.map((item) => (
                        <ToggleButton value={item} key={item} aria-label={item} className={cla.root} >
                            {item}
                        </ToggleButton>
                    ))
                };
        </ToggleButtonGroup >
        </div>
    )
}
MyButtonGroup.defaultProps = {
    button: ['Youtube', 'Theaters', 'Streaming']
}
export default MyButtonGroup