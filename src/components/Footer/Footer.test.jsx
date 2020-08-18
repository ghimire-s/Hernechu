import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";


Enzyme.configure({ adapter: new Adapter() });
describe("Footer", () => {
    it("should render Footer", () => {
        const wrapper = shallow(<Footer />);
    });
});