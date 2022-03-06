import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type dialogsType = {
    id: number,
    name: string
}

let dialogs: Array<dialogsType> = [
    {id: 1, name: 'Kirill'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Anya'},
    {id: 4, name: 'Ivan'},
    {id: 5, name: 'Sveta'},
]

export type messagesType = {
    id: number,
    message: string
}

let messages: Array<messagesType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'HIHI'},
    {id: 3, message: 'Yo'},
    {id: 3, message: 'YoYo'},
]

export type myPostsType = {
    id: number,
    message: string,
    likes: number
}

let myPosts: Array<myPostsType> = [
    {id: 1, message: 'Hi, how are you?', likes: 15},
    {id: 2, message: 'It is your first post', likes: 20},
    {id: 2, message: 'It is your second post', likes: 30}
]

ReactDOM.render(
    <App messages={messages} dialogs={dialogs} myPosts={myPosts}/>,
    document.getElementById('root')
);