import React from "react";
import s from "./Users.module.css";
import Pagination from "./Pagination";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={s.usersList}>
            <Pagination currentPage={props.currentPage} onPageChange={props.onPageChange}
                        totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
            />
            {props.usersListF()}
        </div>
    )
};

export default Users;