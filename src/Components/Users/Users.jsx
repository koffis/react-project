import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={s.usersList}>
            <div>
                {
                    pages.map(p => {
                        return <span onClick={(e) => {
                            props.onPageChange(p)
                        }} className={props.currentPage === p && s.selectedPage}>{p}</span>
                    })
                }
            </div>
            {props.usersListF()}
        </div>
    )
};

export default Users;