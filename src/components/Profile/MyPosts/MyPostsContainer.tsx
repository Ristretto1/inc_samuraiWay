import React  from "react";
import {addPost, changeNewText, PostDataType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {AppStateRootType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapStatePropsType = {
    newPostText: string,
    posts: Array<PostDataType>

}
type mapDispatchToPropsType = {
    addPost: (text: string) => void
}

export type MyPostsPropsType = MapStatePropsType & mapDispatchToPropsType


const mapStateToProps = (state: AppStateRootType): MapStatePropsType=> {
    return {
        newPostText: state.profile.newPostText,
        posts: state.profile.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch) : mapDispatchToPropsType=> {
    return {
        addPost: (text: string) => {
            dispatch(addPost(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)