import reducer from './websiteReducer'
import * as types from '../actions/types';
import { navBar, webSiteName } from '../website';


const websiteName = webSiteName;
const navbar = navBar;
const initialState = {
    navBar: [],
    websiteName: null
};
describe('movie reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            initialState,
        )
    })

    it('should handle name fetch of website', () => {
        expect(
            reducer({ 'navBar': [], 'websiteName': null }, {
                type: types.WEBSITE,
                payload: websiteName,
            })
        ).toEqual(
            {
                navBar: [],
                websiteName: websiteName,
            }
        )
    })

    it('should handle navBar', () => {
        expect(
            reducer({ 'navBar': [], 'websiteName': null }, {
                type: types.NAV_BAR,
                payload: navbar,
            })
        ).toEqual(
            {
                navBar: navBar,
                websiteName: null,
            }
        )
    })
})