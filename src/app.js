import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { startSetTodos } from './actions';

import reducers from './reducers';
import Router from './router';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import './firebase/firebase';

// function logger({ getState }) {
//     return next => action => {
//         console.log('will dispatch1', action)

//         // Call the next dispatch method in the middleware chain.
//         const returnValue = next(action)

//         console.log('state after dispatch1', getState())

//         // This will likely be the action itself, unless
//         // a middleware further in chain changed it.
//         return returnValue
//     }
// }

// function logger2({ getState }) {
//     return next => action => {
//         console.log('will dispatch2', action)

//         // Call the next dispatch method in the middleware chain.
//         const returnValue = next(action)

//         console.log('state after dispatch2', getState())

//         // This will likely be the action itself, unless
//         // a middleware further in chain changed it.
//         return returnValue
//     }
// }

const store = createStore(reducers, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(startSetTodos()).then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <Router />
        </Provider>
        , document.getElementById('app'));
})


