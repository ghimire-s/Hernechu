import React from 'react';
import { Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Title = (props) => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div>
            <Typography variant={smallScreen ? "h5" : "h4"} key={`typography${props.item}`}>{props.item}</Typography>
        </div>
    )
}
export default Title
