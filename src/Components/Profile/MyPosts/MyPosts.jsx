import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';


const MyPost = (props) => {

    let postElements = props.state.postsData.map(
        post => <Post message={post.message} likes={post.likes}/>
    );

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea placeholder='Write ur post'></textarea><br/>
                <button className={s.postBtn}>Add post</button>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
};

export default MyPost;