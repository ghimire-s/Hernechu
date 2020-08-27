import React from 'react';
import Playing from './Playing';


export default {
    title: 'Movie Page/Playing',
    component: Playing
}

export const Default = () => <Playing />
export const MobileView = () => <Playing />
export const IpadView = () => <Playing />
export const largeScreen = () => <Playing />

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
