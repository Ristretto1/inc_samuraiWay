import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

type renderedEntireTreePropsType = {
    state: any
}

export const renderedEntireTree = (props: renderedEntireTreePropsType) => {
    ReactDOM.render(
        <App state={props.state}/>,
        document.getElementById('root')
    );
}
