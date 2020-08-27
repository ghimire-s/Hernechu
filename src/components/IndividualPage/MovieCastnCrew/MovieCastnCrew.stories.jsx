import React from 'react';
import MovieCastnCrew from './MovieCastnCrew';


export default {
    title: 'Movie Page/Movie Cast n Crew',
    component: MovieCastnCrew,
}

export const Default = () => <MovieCastnCrew />
export const MobileView = () => <MovieCastnCrew />
export const IpadView = () => <MovieCastnCrew />
export const largeScreen = () => <MovieCastnCrew />

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