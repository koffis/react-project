import React from 'react';
import Post from './Posts/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/Validators/validator";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);

const MyPostForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder='Write...' name={'newPost'}  component={Textarea}
                        validate={[required, maxLength10]}
                    />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        </div>
    )
};
const MyPostReduxForm = reduxForm({form: 'posts'})(MyPostForm);

const  MyPost = React.memo(props => {
    console.log('RENDER YO');
    let postElements = [...props.posts].map(
        post => <Post message={post.message} likes={post.likes} profile={props.profile}/>
    ).reverse();

    let addNewPost = (values) => {
        props.addPost(values.newPost)
    };
    return (
        <div>
            <h3>My Posts</h3>
            <MyPostReduxForm onSubmit={addNewPost}/>
            <div>
                {postElements}
            </div>
        </div>
    )
});


export default MyPost;