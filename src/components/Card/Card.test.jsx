import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Card from './Card'

Enzyme.configure({ adapter: new Adapter() });
describe("Card", () => {
    it("should render Card", () => {
        const wrapper = shallow(<Card />)
    })
})