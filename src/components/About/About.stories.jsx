import React from 'react';
import About from './About'

export default {
    title: 'Page/About',
    component: About
}

export const Default = () => <About />
export const MobileView = () => <About />
export const IpadView = () => <About />
export const largeScreen = () => <About />

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