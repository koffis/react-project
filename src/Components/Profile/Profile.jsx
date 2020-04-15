import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <div>
                <ProfileInfo profile={props.profile}/>
            </div>
          <div className={s.posts}>
              <MyPostContainer profile={props.profile}/>
          </div>
      </div>
    )
};

export default Profile;