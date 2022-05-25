import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './redux/redux-store';
import {StateType} from './redux/store';
import './index.css';
import StoreContext from './StoreContext';


const renderedEntireTree = (state: StateType) => {
    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <App/>
        </StoreContext.Provider>, document.getElementById('root'))
}

renderedEntireTree(store.getState());

store.subscribe(()=>renderedEntireTree(store.getState()))