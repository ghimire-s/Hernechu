import React from 'react';
import Home from './Home';
import store from '../../store';
import { Provider } from 'react-redux';


export default {
    title: 'Page/Home',
    component: Home,
};

export const Default = () => <Provider store={store}><Home /></Provider>
export const test = () => <Provider store={store}><Home /></Provider>
export const MobileView = () => <Provider store={store}><Home /></Provider>
export const IpadView = () => <Provider store={store}><Home /></Provider>
export const largeScreen = () => <Provider store={store}><Home /></Provider>

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