import {
    FETCH_MOVIES,
    FETCH_MOVIE
} from '../actions/types';
import data from '../data.json';

const ds = data
const playing_filter = ds.filter(item => item.youtube !== "")
export const fetchMovies = (playing) => {
    return {
        type: FETCH_MOVIES,
        payload: playing === 'Youtube' ? playing_filter : ds
    }
}

export const fetchMovie = (name) => {
    const new_ds = ds.filter(item => item.name === name)
    return {
        type: FETCH_MOVIE,
        payload: new_ds
    }
}