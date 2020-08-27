import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import MyCard from './Card';


Enzyme.configure({ adapter: new Adapter() });
describe("MyCard", () => {
    it("should render Card", () => {
        const wrapper = shallow(<MyCard />)
    })
})