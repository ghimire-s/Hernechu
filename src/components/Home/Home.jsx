import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movieAction';
import Carousel from '../Carousel/Carousel';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, ListItem } from '@material-ui/core';

const useStyles = (theme) => ({
    button: {
        paddingLeft: theme.spacing(3)
    },
    carrousel: {
        paddingTop: theme.spacing(3)
    },
    row: {
        marginTop: theme.spacing(3)
    }

});
class Home extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    }
    render() {
        const { classes } = this.props
        return (
            <div>
                <Grid container>
                    {['Movies', 'Songs', 'Trailers'].map((item) => (
                        <div key={item} className={classes.row}>
                            <Grid item xs={12} key={item}>
                                <ListItem key={item}>
                                    <Typography variant="h4" key={item}>{item}</Typography>
                                    <ButtonGroup key={item} className={classes.button} color="primary" aria-label="outlined primary button group">
                                        <Button key={`1+{$item}`}>Youtube</Button>
                                        <Button key={`2+{$item}`}>Theaters</Button>
                                        <Button key={`3+{$item}`}>Site</Button>
                                    </ButtonGroup>
                                </ListItem>
                            </Grid>
                            <div className={classes.carrousel} key={item}>
                                <Carousel />
                            </div>
                        </div>
                    ))}
                </Grid>
            </div >
        )
    }
}
const mapStateToProps = state => ({
    movies: state.movies.items
});

export default connect(mapStateToProps, { fetchMovies })(withStyles(useStyles, { withTheme: true })(Home))
