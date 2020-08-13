import { combineReducers } from 'redux';
import movies from './movieReducer';
import website from './websiteReducer';


export default combineReducers({
    movies,
    website
})

