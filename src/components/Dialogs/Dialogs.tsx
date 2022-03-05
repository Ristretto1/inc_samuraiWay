import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = () => {

    type dialogsDataType = {
        id: number,
        name: string
    }

    let dialogsData: Array<dialogsDataType> = [
        {id:1, name:'Kirill'},
        {id:2, name:'Dima'},
        {id:3, name:'Anya'},
        {id:4, name:'Ivan'},
        {id:5, name:'Sveta'},
    ]

    type messagesDataType = {
        id: number,
        message: string
    }

    let messagesData: Array<messagesDataType> = [
        {id:1, message:'Hi'},
        {id:2, message:'HIHI'},
        {id:3, message:'Yo'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name}/>
            </div>
            <div className={s.messagesItems}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    );
};

export default Dialogs;