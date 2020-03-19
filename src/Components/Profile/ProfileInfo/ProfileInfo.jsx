import React from 'react';
import s from'./../Content.module.css';


const ProfileInfo = () => {
    return (
      <div>
        <img className={s.hat} src='https://images.pexels.com/photos/533923/pexels-photo-533923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
      <div>
        <img className ={s.avatar} src = "https://pbs.twimg.com/profile_images/1170910203111497728/F-xwMzTD_400x400.jpg" /> <br></br>
      </div>
      </div>
    )
};

export default ProfileInfo;