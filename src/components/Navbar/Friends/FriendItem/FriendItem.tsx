import s from './FriendItem.module.css';

import React from 'react';

type FriendItemPropsType = {
    key: number,
    img: string,
    name: string
}

const FriendItem: React.FC<FriendItemPropsType> = (props) => {
    return (
        <li className={s.item}>
            <img src={props.img}/>
            <span>{props.name}</span>
        </li>
    );
};

export default FriendItem;
