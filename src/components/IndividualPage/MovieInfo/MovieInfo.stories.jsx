import React from 'react';
import MovieInfo from './MovieInfo';


export default {
    title: 'Movie Page/Movie Info',
    component: MovieInfo
}

export const Default = () => <MovieInfo />
export const MobileView = () => <MovieInfo />
export const IpadView = () => <MovieInfo />
export const largeScreen = () => <MovieInfo />

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
