import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}><NavLink to='/dialogs/1'>Kirill</NavLink></div>
                <div className={s.dialog + ' ' + s.active}><NavLink to='/dialogs/2'>Dima</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/3'>Anya</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/4'>Ivan</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/5'>Sveta</NavLink></div>
            </div>
            <div className={s.messagesItems}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>HIHI</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
};

export default Dialogs;