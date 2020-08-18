import NavBar from './NavBar';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';



export default {
    title: 'Header/NavBar',
    component: NavBar,
};




export const Default = () => <Router><NavBar /></Router>
export const EditableNavItem = (args) => <Router><NavBar {...args} /></Router>
