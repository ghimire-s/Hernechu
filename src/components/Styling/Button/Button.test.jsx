import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import MyButton from './Button'

Enzyme.configure({ adapter: new Adapter() });
describe("MyButton", () => {
    it("should render MyButton", () => {
        const wrapper = shallow(<MyButton />)
    })
})