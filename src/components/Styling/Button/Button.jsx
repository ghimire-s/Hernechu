import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
    root: {
        backgroundColor: (props) => (props.color)
    }
})

const MyButton = (props) => {
    const classes = useStyles(props);
    return (
        <Button className={classes.root}> {props.title}</Button>
    )
}

MyButton.defaultProps = {
    title: 'Button',
    color: '#cfd5da'
}

export default MyButton;