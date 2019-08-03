import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from './store/reducer';
import {BrowserRouter} from 'react-router-dom';
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const app = (
    <BrowserRouter>
        <App store={store} />
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
