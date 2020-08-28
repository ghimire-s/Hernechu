import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import YoutubePlayer from './YoutubePlayer'

Enzyme.configure({ adapter: new Adapter() });
describe("YoutubePlayer", () => {
    it("should render YoutubePlayer", () => {
        const wrapper = shallow(<YoutubePlayer />)
    })
})