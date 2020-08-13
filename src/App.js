import React from 'react';

import { Provider } from 'react-redux';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      < Router>
        <div className="App">
          <div className="header">
            <Header />
          </div>
          <Body />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
