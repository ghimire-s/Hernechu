import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import MovieInfo from './MovieInfo';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });
describe("MovieInfo", () => {
    it("should render MovieInfo", () => {
        const wrapper = shallow(<MovieInfo />);
    });
})