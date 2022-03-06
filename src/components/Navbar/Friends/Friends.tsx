import s from './Friends.module.css';

import React from 'react';
import FriendItem from "./FriendItem/FriendItem";
import {friendsType, sidebarType} from "../../../redux/state";

type FriendsPropsType = {
    friends: Array<friendsType>
}

const Friends = (props: FriendsPropsType) => {

    let friendsList = props.friends.map((f) => {
        return <FriendItem key={f.id} img={f.img} name={f.name}/>
    })

    return (
        <div className={s.friendsBlock}>
            <div className={s.title}>Friends</div>
            <ul className={s.list}>
                {friendsList}
            </ul>

        </div>
    );
};

export default Friends;