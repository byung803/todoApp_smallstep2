import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import Router from './router';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = createStore(reducers);

store.subscribe(() => {
    console.log(store.getState());
});



ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>
    , document.getElementById('app'));
