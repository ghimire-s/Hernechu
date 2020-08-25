import React from 'react';
import Trailers from './Trailers';

export default {
    title: 'Page/Trailers',
    component: Trailers,
};

export const Default = () => <Trailers />
export const MobileView = () => <Trailers />
export const IpadView = () => <Trailers />
export const largeScreen = () => <Trailers />

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

