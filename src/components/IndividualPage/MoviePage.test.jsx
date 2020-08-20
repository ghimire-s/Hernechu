import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import MoviePage from './MoviePage';
import Adapter from 'enzyme-adapter-react-16';
import { Grid, Typography } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from '../../store';

Enzyme.configure({ adapter: new Adapter() });
describe("MoviePage", () => {
    it("should render MoviePage", () => {
        const wrapper = shallow(<Provider store={store}><MoviePage /></Provider >);
    });
    it("should contain Grid element", () => {
        const wrapper = mount(<Provider store={store}><MoviePage /></Provider >);
        const grid = <Typography>
            This is movie
            </Typography>

        expect(wrapper.contains(grid)).toEqual(true);
    })
    it("should contain Grid element", () => {
        const wrapper = mount(<Provider store={store}><MoviePage /></Provider >);
        const grid = <Typography>
            This is Not a movie
            </Typography>

        expect(wrapper.contains(grid)).toEqual(false);
    })
});