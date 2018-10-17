import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import mainReducer from './reducers/mainReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function middleware({ dispatch, getState }) {
    return next => (action) => {
        if (typeof action === 'function') {
            return action(dispatch, getState);
        }
        return next(action);
    };
}

const store = createStore(
    mainReducer,
    undefined,
    composeEnhancers(applyMiddleware(middleware))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
