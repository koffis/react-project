import profileReducer, {addPostActionCreator, deletePost} from "../Redux/profile-reducer";
import React from "react";

let state = {
    postsData: [
        {id: 1, message: 'Hello guys, how are u?', likes: 15},
        {id: 2, message: 'How are u?', likes: 13},
        {id: 3, message: 'Today was perfect weather', likes: 999},
        {id: 4, message: 'All day thinking about u', likes: 999}
    ]
};

test('length of posts should be incremented', () => {
    let action = addPostActionCreator('lnu franka');

    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(5);
});

test('message of new post should be correct', () => {
    let action = addPostActionCreator('lnu franka');

    let newState = profileReducer(state, action);

    expect(newState.postsData[4].message).toBe('lnu franka');
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(3);
});

test('after deleting length shouldn`t be decrement if id is incorrect', () => {
    let action = deletePost(10);

    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(4);
});




