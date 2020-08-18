import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Logo from './Logo'

Enzyme.configure({ adapter: new Adapter() });
describe("Logo", () => {
    it("should render Logo", () => {
        const wrapper = shallow(<Logo />)
    })
})