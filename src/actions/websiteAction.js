import { NAV_BAR, WEBSITE } from './types';
import { navBar, websiteName } from '../website';

const nav = navBar;
const web = websiteName;
export const getNav = () => dispatch => {
    dispatch({
        type: NAV_BAR,
        payload: nav
    })
}

export const getWebsiteName = () => dispatch => {
    dispatch({
        type: WEBSITE,
        payload: web
    })
}