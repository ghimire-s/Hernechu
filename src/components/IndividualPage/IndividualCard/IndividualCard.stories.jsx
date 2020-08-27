import React from 'react';
import IndividualCard from './IndividualCard';

export default {
    title: 'Section/IndividualCard',
    component: IndividualCard
}

export const Default = () => <IndividualCard />
export const MobileView = () => <IndividualCard />
export const IpadView = () => <IndividualCard />
export const largeScreen = () => <IndividualCard />

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