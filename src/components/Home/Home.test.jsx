import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Home from './Home';
import { Provider } from 'react-redux';
import store from '../../store';

Enzyme.configure({ adapter: new Adapter() });
describe("Home", () => {
    it("should render Home", () => {
        const wrapper = mount(<Provider store={store}><Home /></Provider>)
    })
})