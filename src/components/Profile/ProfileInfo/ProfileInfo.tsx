import React from "react";
import s from './ProfileInfo.module.css';

type ProfileInfo = {}

const ProfileInfo = (props: ProfileInfo) => {
    return (
        <div>
            <div>
                <img src="https://s1.1zoom.ru/b5050/297/Canada_Mountains_Scenery_488936_3840x2400.jpg" alt=""/>
            </div>
            <div className={s.descBlock}>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo;