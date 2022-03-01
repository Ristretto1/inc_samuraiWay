import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://s1.1zoom.ru/b5050/297/Canada_Mountains_Scenery_488936_3840x2400.jpg" alt=""/>
            </div>
            <div>
                ava + descr
            </div>
            <MyPosts />
        </div>
    );
};

export default Profile;