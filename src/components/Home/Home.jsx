import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movieAction';
import Carousel from '../Carousel/Carousel';
import MyButtonGroup from './ButtonGroup/ButtonGroup';
import { withStyles } from '@material-ui/core/styles';
import { Grid, ListItem } from '@material-ui/core';
import Title from './Title'

const useStyles = (theme) => ({
    carrousel: {
        paddingTop: theme.spacing(3)
    },
    row: {
        marginTop: theme.spacing(3),
        overflow: 'hidden',
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
                        <div key={`main${item}`} className={classes.row}>
                            <Grid item xs={12} key={`gridMain${item}`}>
                                <ListItem key={`listItem${item}`}>
                                    <Title item={item} />
                                    <MyButtonGroup item={item} />
                                </ListItem>
                            </Grid>
                            <div className={classes.carrousel} key={`carousel${item}`}>
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
