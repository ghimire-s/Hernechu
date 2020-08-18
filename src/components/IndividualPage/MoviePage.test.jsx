import React from 'react';
import { shallow } from 'enzyme';
import MoviePage from './MoviePage';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Grid } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });
describe("MoviePage", () => {
    it("should render MoviePage", () => {
        const wrapper = shallow(<MoviePage />);
    });
    it("should contain Grid element", () => {
        const wrapper = shallow(<MoviePage />);
        const grid = <Grid container spacing={2}></Grid>;
        expect(wrapper.contains(grid)).toEqual(true);
    })
});