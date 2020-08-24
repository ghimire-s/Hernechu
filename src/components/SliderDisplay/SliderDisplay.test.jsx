import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import SliderDisplay from './SliderDisplay'

Enzyme.configure({ adapter: new Adapter() });
describe("SliderDisplay", () => {
    it("should render SliderDisplay", () => {
        const wrapper = shallow(<SliderDisplay />)
    })
})