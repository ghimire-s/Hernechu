import React from 'react';
import Body from './Body';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import store from '../../store';

export default {
    title: 'Page/Body',
    component: Body,
}

export const Home = () =>
    <Provider store={store}>
        <Router history={createMemoryHistory({ initialEntries: ['/'] })}>
            <Body />
        </Router>
    </Provider>

export const Songs = () =>
    <Router history={createMemoryHistory({ initialEntries: ['/Songs'] })}>
        <Body />
    </Router>

export const Trialers = () =>

    <Router history={createMemoryHistory({ initialEntries: ['/Trailers'] })}>
        <Body />
    </Router>

export const About = () =>
    <Router history={createMemoryHistory({ initialEntries: ['/About'] })}>
        <Body />
    </Router>