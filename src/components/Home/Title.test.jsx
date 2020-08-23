import React from 'react';
import { shallow } from 'enzyme';

import Title from './Title';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";


Enzyme.configure({ adapter: new Adapter() });
describe("Title", () => {
    it("should render Title", () => {
        const wrapper = shallow(<Title />);
    });
});