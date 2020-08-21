import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import MyCard from './Card';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

Enzyme.configure({ adapter: new Adapter() });
describe("MyCard", () => {
    it("should render Card", () => {
        const wrapper = shallow(<MyCard />)
    })
    it('should contain card element', () => {
        const wrapper = shallow(<MyCard image={"this is a image"} />)
        const card = <Card elevation={3} className="makeStyles-root-1">
            <CardActionArea>
                <CardMedia component="img" image="this is a image" title="Live from space album cover">
                </CardMedia>
            </CardActionArea>
        </Card>
        expect(wrapper.contains(card)).toEqual(true)
    })
    it('should contain card element with media', () => {
        const wrapper = shallow(<MyCard image={"this is a image"} />)
        const cardwithMedia = <CardMedia component="img" image="this is a image" title="Live from space album cover"></CardMedia>
        expect(wrapper.contains(cardwithMedia)).toEqual(true)
    })
    it('card should be clickable', () => {
        const wrapper = shallow(<MyCard image={"this is a image"} />)
        const cardwithClick = <CardActionArea>
            <CardMedia component="img" image="this is a image" title="Live from space album cover">

            </CardMedia>
        </CardActionArea>
        expect(wrapper.contains(cardwithClick)).toEqual(true)
    })
})