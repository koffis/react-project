import React from 'react';
import {addPostActionCreator} from "../../../Redux/profile-reducer";
import MyPost from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPostActionCreator(newPost));
        }
    }
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;