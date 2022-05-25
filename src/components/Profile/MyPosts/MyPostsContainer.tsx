import React, {ChangeEvent, createRef} from 'react';

import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {StateType} from '../../../redux/store';

type myPostsPropsType = {}

let mapStateToProps = (state: StateType) => {
    return {
        profilePage: state.profilePage,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: ()=>dispatch(addPostActionCreator()),
        updateNewPostText: (text: string)=>dispatch(updateNewPostActionCreator(text))
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;