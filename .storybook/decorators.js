import React from 'react'
import { Provider } from 'react-redux';
import store from '../src/store';

function WithProvider(props) {
    return (
        <Provider store={store}>
            <div>{props}</div>

        </Provider>
    )
}

export default WithProvider;
