import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movieAction';
import SliderDisplay from '../SliderDisplay/SliderDisplay'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { movie_search: 'All', data: [] };
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
        return (
            <div>
                <SliderDisplay selection={this.selectMovieShowing} data={this.state.data} />
            </div >
        )
    }
}
const mapStateToProps = state => ({
    movies: state.movies.items
});

export default connect(mapStateToProps, { fetchMovies })(Home)
