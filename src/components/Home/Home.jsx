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
    constructor(props) {
        super(props);
        this.state = { movie_search: 'all', data: [] };
        this.selectMovieShowing = this.selectMovieShowing.bind(this)
    }

    selectMovieShowing(item) {
        this.setState({
            movie_search: item,
            data: this.props.fetchMovies(item).payload
        })
    }
    componentDidMount() {
        this.setState({
            data: this.props.fetchMovies(this.state.movie_search).payload
        })
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
                                    <MyButtonGroup item={item} selection={this.selectMovieShowing} />
                                </ListItem>
                            </Grid>
                            <div className={classes.carrousel} key={`carousel${item}`} >
                                <Carousel data={this.state.data} />
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
