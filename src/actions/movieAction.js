import { FETCH_MOVIES, FETCH_MOVIE } from '../actions/types';
import data from '../data.json';

const ds = data

export const fetchMovies = () => {
    return {
        type: FETCH_MOVIES,
        payload: ds
    }
}

export const fetchMovie = (name) => {
    const new_ds = ds.filter(item => item.name === name)
    return {
        type: FETCH_MOVIE,
        payload: new_ds
    }
}
