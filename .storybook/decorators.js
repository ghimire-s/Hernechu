
// stories/Provider.js
import React from 'react';
const Provider = require('react-redux').Provider;

import store from '../src/store';



export default function MyProvider({ story }) {
    return (
        <Provider store={store}>
            {story}
        </Provider>
    );
};