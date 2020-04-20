import React from "react";
import s from "./UserItem.module.css"
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const UserItem = (props) => {
    let path = '/profile/' + props.id;
    return (
        <div className={s.userInfoTable}>
            <div className={s.userInfoVisual}>
                <NavLink to={path}><img alt='dog' src={props.avatar}/></NavLink>
                { props.followed
                    ? <button disabled={props.followingInProgress.some(id => id ===props.id)} onClick={() => {
                        props.toggleFollowingProgress(true, props.id);
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,{
                            withCredentials: true,
                            headers: {
                                "API-KEY" : "06899f2a-56d8-45af-8652-d6910ec3192a"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode == 0) {
                                    props.unfollow(props.id)
                                }
                                props.toggleFollowingProgress(false, props.id);
                            });


                        } }>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id ===props.id)} onClick={ () => {
                        props.toggleFollowingProgress(true, props.id);
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {} , {
                            withCredentials: true,
                            headers: {
                                "API-KEY" : "06899f2a-56d8-45af-8652-d6910ec3192a"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode == 0) {
                                    props.follow(props.id)
                                }
                                props.toggleFollowingProgress(false, props.id);
                            });
                    } }>Follow</button> }
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