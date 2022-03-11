import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {myPostsType} from "../../../redux/state";

type myPostsPropsType = {
    myPosts: Array<myPostsType>
}

const MyPosts: React.FC<myPostsPropsType> = (props) => {

    const posts = props.myPosts.map((p) => {
        return <Post key={p.id} likes={p.likes} message={p.message}/>
    })
    let addPost = () => {
    }


    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>

            <div>
                <div>
                    <textarea></textarea>
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