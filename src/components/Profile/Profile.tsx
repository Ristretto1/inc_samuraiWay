import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {myPostsType, profilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: profilePageType,
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts myPosts={props.state.myPosts}/>
        </div>
    );
};

export default Profile;