import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {subscribe, addPost, updateNewPostText, stateType} from './redux/state';
import './index.css';




const renderedEntireTree = (state: stateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>, document.getElementById('root'))

}

renderedEntireTree(state);

subscribe(renderedEntireTree)