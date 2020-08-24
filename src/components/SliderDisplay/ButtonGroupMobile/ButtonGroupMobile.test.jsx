import React from 'react';
import { shallow } from 'enzyme';

import ButtonGroupMobile from './ButtonGroupMobile';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";


Enzyme.configure({ adapter: new Adapter() });
describe("ButtonGroupMobile", () => {
    it("should render ButtonGroupMobile", () => {
        const wrapper = shallow(<ButtonGroupMobile />);
    });
});