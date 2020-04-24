import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress, getUsers
} from "../../Redux/users-reducer";
import UserItem from "./UserItem/UserItem";
import userPhoto from "../../Images/user.png";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }


    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);

    };

    usersListF = () => {
        let usersList = this.props.usersData.map(u => <UserItem
                key={u.id}
                id={u.id}
                name={u.name}
                avatar={u.photos.small != null ? u.photos.small : userPhoto}
                //location={users.location}
                status={u.status}
                followed={u.followed}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        );
        return usersList;
    };

    render() {
        return (<>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    onPageChange={this.onPageChange}
                    usersListF={this.usersListF}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, toggleFollowingProgress,getUsers})
(UsersContainer);