import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader';
import {ProfileType} from '../../../redux/store';

type ProfileInfoPropsType = {
    profile: ProfileType
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="https://s1.1zoom.ru/b5050/297/Canada_Mountains_Scenery_488936_3840x2400.jpg" alt=""/>
            </div>
            <div className={s.descBlock}>
                <img src={props.profile.photos.large}/>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo;