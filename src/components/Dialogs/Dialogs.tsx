import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={1} name={'Kirill'}/>
                <DialogItem id={2} name={'Dima'}/>
                <DialogItem id={3} name={'Anya'}/>
                <DialogItem id={4} name={'Ivan'}/>
                <DialogItem id={5} name={'Sveta'}/>
            </div>
            <div className={s.messagesItems}>
                <Message message={'Hi'}/>
                <Message message={'HIHI'}/>
                <Message message={'Yo'}/>
            </div>
        </div>
    );
};

export default Dialogs;