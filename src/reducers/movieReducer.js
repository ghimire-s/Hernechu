import { FETCH_MOVIES, FETCH_MOVIE } from '../actions/types';

const initalstate = {
    items: [],
    movie: {},
}
const movies = (state = initalstate, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                items: action.payload
            }
        case FETCH_MOVIE:
            return {
                ...state,
                movie: action.payload
            }
        default:
            return state
    }
}

export default movies