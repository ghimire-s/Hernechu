
import React from 'react';
import Header from './Header';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';


export default {
    title: 'Section/Header',
    component: Header,
    decorators: [story => <Router history={createMemoryHistory({ initialEntries: ['/'] })}>
        {story()}
    </Router>],

}

export const Default = () => <Header />
export const MobileView = () => <Header />
export const IpadView = () => <Header />
export const largeScreen = () => <Header />

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