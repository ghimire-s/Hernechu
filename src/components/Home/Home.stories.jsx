import React from 'react';
import Home from './Home';
import store from '../../store';
import { Provider } from 'react-redux'


export default {
    title: 'Sections/Home',
    component: Home,
};

export const Default = () => <Provider store={store}><Home /></Provider>