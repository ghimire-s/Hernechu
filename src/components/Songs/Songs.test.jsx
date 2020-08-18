import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Songs from './Songs'

Enzyme.configure({ adapter: new Adapter() });
describe("Songs", () => {
    it("should render Songs", () => {
        const wrapper = shallow(<Songs />)
    })
})