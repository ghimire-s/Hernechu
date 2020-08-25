import React from 'react';
import Carousel from './Carousel';

export default {
    title: 'Section/Carousel',
    component: Carousel
}

export const Default = () => <Carousel />
export const MobileView = () => <Carousel />
export const IpadView = () => <Carousel />
export const largeScreen = () => <Carousel />

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
