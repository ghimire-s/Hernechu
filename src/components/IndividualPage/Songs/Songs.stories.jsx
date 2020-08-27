import React from 'react';
import Songs from './Songs';

export default {
    title: 'Movie Page/Songs',
    component: Songs
}

export const Default = () => <Songs />
export const MobileView = () => <Songs />
export const IpadView = () => <Songs />
export const largeScreen = () => <Songs />

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