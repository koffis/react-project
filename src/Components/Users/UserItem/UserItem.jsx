import React from "react";
import s from "./UserItem.module.css"
import {NavLink} from "react-router-dom";

const UserItem = (props) => {
    let path = '/profile/' + props.id;
    return (
        <div className={s.userInfoTable}>
            <div className={s.userInfoVisual}>
                <NavLink to={path}><img alt='dog' src={props.avatar}/></NavLink>
                { props.followed
                    ? <button onClick={ () => {props.unfollow(props.id)} }>Unfollow</button>
                    : <button onClick={ () => {props.follow(props.id)} }>Follow</button> }
            </div>
            <div className={s.userInfoStatus}>
                <NavLink to={path}>{props.name}</NavLink>
                <p>{props.status}</p>
            </div>
            <div className={s.userMoreInfo}>
                <p>Ukraine {/*{props.location.country}*/}</p>
                <p>Lviv{/*{props.location.city}*/}</p>
            </div>
        </div>
    )
};

export default UserItem;