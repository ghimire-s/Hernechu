import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Carousel from './Carousel'

Enzyme.configure({ adapter: new Adapter() });
describe("Carousel", () => {
    it("should render Carousel", () => {
        const wrapper = shallow(<Carousel />)
    })
})