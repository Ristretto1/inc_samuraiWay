import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = () => {

    type dialogsType = {
        id: number,
        name: string
    }

    let dialogs: Array<dialogsType> = [
        {id:1, name:'Kirill'},
        {id:2, name:'Dima'},
        {id:3, name:'Anya'},
        {id:4, name:'Ivan'},
        {id:5, name:'Sveta'},
    ]

    type messagesType = {
        id: number,
        message: string
    }

    let messages: Array<messagesType> = [
        {id:1, message:'Hi'},
        {id:2, message:'HIHI'},
        {id:3, message:'Yo'},
        {id:3, message:'YoYo'},
    ]

    let dialogsElements = dialogs.map((d)=>{
        return <DialogItem key={d.id} id={d.id} name={d.name}/>
    })

    let messagesElements = messages.map((m) => {
        return <Message message={m.message}/>
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messagesItems}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;