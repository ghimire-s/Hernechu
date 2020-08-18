import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Palette from './Palette'

Enzyme.configure({ adapter: new Adapter() });
describe("Palette", () => {
    it("should render Palette", () => {
        const wrapper = shallow(<Palette />)
    })
})