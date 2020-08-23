import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import MyButtonGroup from './ButtonGroup';


Enzyme.configure({ adapter: new Adapter() });
describe("ButtonGroup", () => {
    it("should render ButtonGroup", () => {
        const wrapper = shallow(<MyButtonGroup />)
    })
})