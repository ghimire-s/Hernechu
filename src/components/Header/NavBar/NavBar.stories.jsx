
import NavBar from './NavBar';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'


export default {
    title: 'Header/NavBar',
    component: NavBar,
    argTypes: { onClick: { action: 'clicked' } },
};



export const test = () => <Router><NavBar /></Router>
