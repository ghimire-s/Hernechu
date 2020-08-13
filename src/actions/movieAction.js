import { FETCH_MOVIES, FETCH_MOVIE } from '../actions/types';
import data from '../data.json';


const ds = data
export const fetchMovies = () => dispatch => {
    dispatch({
        type: FETCH_MOVIES,
        payload: ds
    })
}

export const fetchMovie = (name) => dispatch => {
    dispatch({
        type: FETCH_MOVIE,
        payload: ds['name'] = name
    })
}
