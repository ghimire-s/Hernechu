import React from 'react';
import { mount } from 'enzyme';
import MoviePage from './MoviePage';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Grid } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from '../../store';

Enzyme.configure({ adapter: new Adapter() });
describe("MoviePage", () => {
    it("should render MoviePage", () => {
        const wrapper = mount(<Provider store={store}><MoviePage /></Provider >);
    });
    it("should contain Grid element", () => {
        const wrapper = mount(<Provider store={store}><MoviePage /></Provider >);
        const grid = <Grid container spacing={2}></Grid>;
        expect(wrapper.contains(grid)).toEqual(true);
    })
});