import * as actions from './websiteAction';
import * as types from './types';
import expect from 'expect';

describe('Fetching movie actions', () => {
    const navBar = ['Home', 'Songs', 'Trailers', 'About']
    const websiteName = "Hernucha"
    it('Should give the navigation units', () => {
        const expectedAction = {
            type: types.NAV_BAR,
            payload: navBar
        }
        expect(actions.getNav()).toEqual(expectedAction)
    });
    it('Should give the website name', () => {
        const expectedAction = {
            type: types.WEBSITE,
            payload: websiteName
        }
        expect(actions.getWebsiteName()).toEqual(expectedAction)
    })
})