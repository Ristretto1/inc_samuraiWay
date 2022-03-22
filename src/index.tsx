import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {stateType} from './redux/state'
import {renderedEntireTree} from "./render";

renderedEntireTree(state)

