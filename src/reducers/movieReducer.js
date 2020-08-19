import { FETCH_MOVIES, FETCH_MOVIE } from '../actions/types';

const initalstate = {
    items: [],
    item: []
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
                item: action.payload
            }
        default:
            return state
    }
}

export default movies