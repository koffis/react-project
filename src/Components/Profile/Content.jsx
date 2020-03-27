import React from 'react';
import s from'./Content.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostsContainer";

const Content = (props) => {
    return (
        <div>
            <div>
                <ProfileInfo/>
            </div>
          <div className={s.posts}>
              <MyPostContainer />
          </div>
      </div>
    )
}

export default Content;