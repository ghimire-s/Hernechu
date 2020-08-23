import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ButtonGroupMobile from '../ButtonGroupMobile/ButtonGroupMobile';


const useStyle = makeStyles((theme) => ({
    button: {
        marginLeft: theme.spacing(3)
    },
}))
const MyButtonGroup = (props) => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyle();
    const regular = <ButtonGroup
        key={`group${props.item}`}
        className={classes.button}
        color="primary"
        aria-label="released location"
        variant="contained"
        size={"medium"}>
        {props.button.map((buttonName, index) => (
            <Button
                key={`${index}${props.item}`}>
                {buttonName}
            </Button>
        ))}
    </ButtonGroup>
    const mobile = <ButtonGroupMobile key={`mobile${props.item}`} />
    return (
        <div>
            {smallScreen ? mobile : regular}
        </div>
    )
}
MyButtonGroup.defaultProps = {
    button: ['Youtube', 'Theaters', 'Streaming']
}
export default MyButtonGroup