import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Body from './Body'
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
describe("Body", () => {
    it("should render Body", () => {
        const wrapper = shallow(<Body />)
    })
})

