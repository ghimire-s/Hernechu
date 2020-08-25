import React from 'react';
import Carousel from '../Carousel/Carousel';
import MyButtonGroup from './ButtonGroup/ButtonGroup';
import { Grid, ListItem } from '@material-ui/core';
import Title from './Title';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ButtonGroupMobile from './ButtonGroupMobile/ButtonGroupMobile';

const useStyles = makeStyles((theme) => ({
    carrousel: {
        paddingTop: theme.spacing(3)
    },
    row: {
        marginTop: theme.spacing(3),
        overflow: 'hidden',
    }

}));

const SliderDisplay = (props) => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles()
    return (
        <div>
            <Grid container>
                {['Movies', 'Songs', 'Trailers'].map((item) => (
                    <div key={`main${item}`} className={classes.row}>
                        <Grid item xs={12} key={`gridMain${item}`}>
                            <ListItem key={`listItem${item}`}>
                                <Title item={item} />
                                {smallScreen ?
                                    <ButtonGroupMobile key={`mobile${item}`} clickSelection={props.selection} /> :
                                    <MyButtonGroup item={item} alignment={props.selectedButton} handleAlignment={props.handleAlignment} />}
                            </ListItem>
                        </Grid>
                        <div className={classes.carrousel} key={`carousel${item}`} >
                            <Carousel data={props.data}
                                card={props.card}
                            />
                        </div>
                    </div>
                ))}
            </Grid>
        </div>
    )
}
export default SliderDisplay;