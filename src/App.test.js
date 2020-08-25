import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

Enzyme.configure({ adapter: new Adapter() });
describe("App", () => {
  it("should render App", () => {
    const wrapper = mount(<Provider store={store}><App /></Provider>)
  })
})