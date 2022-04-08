import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {myPostsType, profilePageType} from '../../redux/state';

type ProfilePropsType = {
    profilePage: profilePageType,
    dispatch: any
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                myPosts={props.profilePage.myPosts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;