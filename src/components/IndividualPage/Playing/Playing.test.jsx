import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Playing from './Playing';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });
describe("Playing", () => {
    it("should render Playing", () => {
        const wrapper = shallow(<Playing />);
    });
})