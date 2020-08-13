import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movieAction';
import Carrousal from '../Carrousal/Carrousal'

class Home extends Component {
    componentDidMount(e) {
        this.props.fetchMovies();
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
                <div className="tile-container">
                    <Carrousal
                        className="carrousal"
                        title="Movies"
                        data={this.props.movies}
                        key="1"
                    ></Carrousal>
                    <Carrousal
                        className="carrousal"
                        title="Songs"
                        data={this.props.movies}
                        key="2"
                    ></Carrousal>
                    <Carrousal
                        className="carrousal"
                        title="Trailers"
                        data={this.props.movies}
                        key="3"
                    ></Carrousal>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    movies: state.movies.items
});

export default connect(mapStateToProps, { fetchMovies })(Home)
