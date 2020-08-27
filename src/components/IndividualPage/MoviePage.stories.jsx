import React, { useState } from 'react';
import MoviePage from './MoviePage';
import { Provider } from 'react-redux';
import store from '../../store';

export default {
    title: 'Page/MoviePage',
    component: MoviePage,
    decorators: [(Story) => (<Provider store={store} ><Story /></Provider>)]
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