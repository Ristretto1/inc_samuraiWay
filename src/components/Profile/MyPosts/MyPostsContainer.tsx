import React, {ChangeEvent, createRef} from 'react';

import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

type myPostsPropsType = {
    store: any
}


const MyPostsContainer: React.FC<myPostsPropsType> = (props) => {

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostActionCreator(text))
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            myPosts={props.store.getState().profilePage.myPosts}
            newPostText={props.store.getState().profilePage.newPostText}
        />
    );
};

export default MyPostsContainer;