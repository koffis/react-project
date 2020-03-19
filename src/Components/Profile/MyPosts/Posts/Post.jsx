import React from 'react';
import s from'./Post.module.css';

const Post = (props) => {
    return (
          <div className={s.item}>
            <img src="https://pbs.twimg.com/profile_images/1170910203111497728/F-xwMzTD_400x400.jpg"/>
            {props.message}<br/>
            likes {props.likes}      
          </div>

    )
};

export default Post;