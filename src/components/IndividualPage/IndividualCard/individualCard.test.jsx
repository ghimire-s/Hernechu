import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import IndividualCard from './IndividualCard';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });
describe("IndividualCard", () => {
    it("should render IndividualCard", () => {
        const wrapper = shallow(<IndividualCard />);
    });
})