import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './redux/redux-store';
import {StateType} from './redux/store';
import './index.css';
import {Provider} from './StoreContext';


const renderedEntireTree = (state: StateType) => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>, document.getElementById('root'))
}

renderedEntireTree(store.getState());

store.subscribe(()=>renderedEntireTree(store.getState()))