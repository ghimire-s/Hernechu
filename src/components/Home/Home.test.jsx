import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Home from './Home';
import { Provider } from 'react-redux';
import store from '../../store';

Enzyme.configure({ adapter: new Adapter() });
describe("Home", () => {
    it("should render Home", () => {
        const wrapper = shallow(<Provider store={store}><Home /></Provider>)
    })
})