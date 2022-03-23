import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {myPostsType, profilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: profilePageType,
    addPost: (postMessage: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts myPosts={props.state.myPosts} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;