import React from 'react';
import YoutubePlayer from './YoutubePlayer';

export default {
    title: 'Section/Youtube Player',
    component: YoutubePlayer,
};

export const Default = () => <YoutubePlayer />
export const MobileView = () => <YoutubePlayer />
export const IpadView = () => <YoutubePlayer />
export const largeScreen = () => <YoutubePlayer />

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

