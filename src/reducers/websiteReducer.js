import { NAV_BAR, WEBSITE } from '../actions/types';

const initialState = {
    navBar: [],
    websiteName: null
}
const website = (state = initialState, action) => {
    switch (action.type) {
        case NAV_BAR:
            return {
                ...state,
                navBar: action.payload
            }
        case WEBSITE:
            return {
                ...state,
                websiteName: action.payload
            }
        default:
            return state
    }
}

export default website