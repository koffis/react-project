import React from "react";
import {NavLink} from "react-router-dom";
import s from './OnlineFriends.module.css'

const OnlineFriends = (props) => {
    let path = '/friends/' + props.id;
    if (props.onlineStatus === 1) {
        return (
            <p className={s.onlineFriends}>
                <NavLink to={path}><img alt='Image' src={props.avatar}/></NavLink><br/>
                <NavLink to={path}>{props.name}</NavLink>
            </p>
        )
    } else {
        return (
            <div></div>
        )
    }
};

export default OnlineFriends;