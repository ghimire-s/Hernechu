import React from 'react';
import MoviePage from './MoviePage';

export default {
    title: 'Page/MoviePage',
    component: MoviePage
}

export const Default = () => <MoviePage />
export const MobileView = () => <MoviePage />
export const IpadView = () => <MoviePage />
export const largeScreen = () => <MoviePage />

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