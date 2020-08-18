import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import NavBar from './NavBar'

Enzyme.configure({ adapter: new Adapter() });
describe("NavBar", () => {
    it("should render NavBar", () => {
        const wrapper = shallow(<NavBar />)
    })
})