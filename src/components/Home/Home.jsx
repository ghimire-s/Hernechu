import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movieAction';
import MoviePage from '../IndividualPage/MoviePage'
import SliderDisplay from '../SliderDisplay/SliderDisplay'


class Home extends Component {

    render() {
        return (
            <div>
                {this.props.card ?
                    <MoviePage
                        indiviualMovieName={this.props.indiviualMovieName}
                    /> :
                    <SliderDisplay
                        selection={this.props.pickSelection}
                        data={this.props.data}
                        card={this.props.click}
                        selectedButton={this.props.selected}
                        handleAlignment={this.props.handleAlignment}

                    />
                }

            </div >
        )
    }
}
const mapStateToProps = state => ({
    movies: state.movies.items
});

export default connect(mapStateToProps, { fetchMovies })(Home)
