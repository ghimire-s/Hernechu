
import React from 'react';
import Header from './Header';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';


export default {
    title: 'Header',
    component: Header,
    decorators: [story => <Router history={createMemoryHistory({ initialEntries: ['/'] })}>
        {story()}
    </Router>]
};

export const Default = () => <Header />
