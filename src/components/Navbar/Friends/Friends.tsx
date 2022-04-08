import s from './Friends.module.css';

import React from 'react';
import FriendItem from "./FriendItem/FriendItem";
import {FriendsType, SidebarType} from "../../../redux/state";

type FriendsPropsType = {
    friends: Array<FriendsType>
}

const Friends: React.FC<FriendsPropsType> = (props) => {

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