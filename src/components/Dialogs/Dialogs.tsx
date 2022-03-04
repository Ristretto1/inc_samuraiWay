import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Kirill
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Anya
                </div>
                <div className={s.dialog}>
                    Ivan
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
            </div>
            <div className={s.messagesItems}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    HIHI
                </div>
                <div className={s.message}>
                    Yo
                </div>
            </div>
        </div>
    );
};

export default Dialogs;