import NavBar from './NavBar';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';



export default {
    title: 'Header/NavBar',
    component: NavBar,
};

export const Default = () => <Router><NavBar /></Router>
export const EditableNavItem = (args) => <Router><NavBar {...args} /></Router>
export const MobileView = () => <Router><NavBar /></Router>
export const IpadView = () => <Router><NavBar /></Router>
export const largeScreen = () => <Router><NavBar /></Router>

MobileView.parameters = {
    viewport: {
        defaultViewport: 'xs'
    },
}

IpadView.parameters = {
    viewport: {
        defaultViewport: 'sm'
    },
}

largeScreen.parameters = {
    viewport: {
        defaultViewport: 'xl'
    },
}
