import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Trailers from './Trailers'

Enzyme.configure({ adapter: new Adapter() });
describe("Trailers", () => {
    it("should render Trailers", () => {
        const wrapper = shallow(<Trailers />)
    })
})