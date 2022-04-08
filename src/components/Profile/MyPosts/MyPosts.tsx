import React, {ChangeEvent, createRef} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, myPostsType, updateNewPostActionCreator} from '../../../redux/state';

type myPostsPropsType = {
    myPosts: Array<myPostsType>
    dispatch: any
    newPostText: string
}



const MyPosts: React.FC<myPostsPropsType> = (props) => {

    const posts = props.myPosts.map((p) => {
        return <Post key={p.id} likes={p.likes} message={p.message}/>
    })

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.dispatch(updateNewPostActionCreator(text))
    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.newPostText}
                        onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    );
};

export default MyPosts;