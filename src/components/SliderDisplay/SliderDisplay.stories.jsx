import React from 'react';
import SliderDisplay from './SliderDisplay';

export default {
    title: 'Section/Slider',
    component: SliderDisplay,
};

export const Default = () => <SliderDisplay />
export const test = () => <SliderDisplay />
export const MobileView = () => <SliderDisplay />
export const IpadView = () => <SliderDisplay />
export const largeScreen = () => <SliderDisplay />

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