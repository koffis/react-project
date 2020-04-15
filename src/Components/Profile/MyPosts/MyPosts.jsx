import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';


const MyPost = (props) => {
    let postElements = props.posts.map(
        post => <Post message={post.message} likes={post.likes} profile={props.profile}/>
    );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };


    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        };

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea
                    placeholder='Write...'
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}/><br/>
                <button onClick={onAddPost} className={s.postBtn}>Add post</button>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
};

export default MyPost;