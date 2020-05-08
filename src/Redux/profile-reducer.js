import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        {id: 1, message: 'Hello guys, how are u?', likes: 15},
        {id: 2, message: 'How are u?', likes: 13},
        {id: 3, message: 'Today was perfect weather', likes: 999},
        {id: 4, message: 'All day thinking about u', likes: 999}
    ],
    newPostText: '',
    profile: null,
    status:'',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            };

            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        case SET_USERS_PROFILE:
            return {
                ...state, profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) =>({type : SET_USERS_PROFILE, profile });
export const setStatus = (status) =>({type : SET_STATUS, status });

export const getProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    };
};

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            });
    };
};

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data === 0){
                    dispatch(setStatus(response.data));
                }
            });
    };
};

export default profileReducer;


