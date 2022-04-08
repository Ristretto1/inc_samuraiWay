import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {StateType} from './redux/state';
import './index.css';


const renderedEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)}/>, document.getElementById('root'))

}

renderedEntireTree(store.getState());

store.subscribe(renderedEntireTree)