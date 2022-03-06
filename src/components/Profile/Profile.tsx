import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {myPostsType} from "../../index";

type ProfilePropsType = {
    myPosts: Array<myPostsType>,
}

const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts myPosts={props.myPosts}/>
        </div>
    );
};

export default Profile;