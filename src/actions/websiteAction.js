import { NAV_BAR, WEBSITE } from './types';
import { navBar, webSiteName } from '../website';

const nav = navBar;
const web = webSiteName;
export const getNav = () => {
    return {
        type: NAV_BAR,
        payload: nav
    }
};

export const getWebsiteName = () => {
    return {
        type: WEBSITE,
        payload: web
    }
}
