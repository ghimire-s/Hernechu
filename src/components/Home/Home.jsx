import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movieAction';
import Carousel from '../Carousel/Carousel'

class Home extends Component {
    componentDidMount(e) {
        this.props.fetchMovies();
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
                <Carousel />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    movies: state.movies.items
});

export default connect(mapStateToProps, { fetchMovies })(Home)
