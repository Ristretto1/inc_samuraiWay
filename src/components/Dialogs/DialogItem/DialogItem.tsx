import React from 'react';
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType ={
    id: number,
    name: string,

}

const DialogItem = (props:DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;