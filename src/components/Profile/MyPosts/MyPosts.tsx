import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';


export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements =
        props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)


    const addPost = (values: PostFormDataType) => {
        props.addPost(values.newPost);
    }

    return (
        <div className={s.posts__block}>
            <div>
                <h3>My post</h3>
                <AddNewPostFormFromRedux onSubmit={addPost}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>

        </div>
    )
}


export type PostFormDataType = {
    newPost: string
}

const AddNewPostForm: React.FC<InjectedFormProps<PostFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPost'} placeholder={'Enter new post'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormFromRedux = reduxForm<PostFormDataType>({form: 'newPost'})(AddNewPostForm)