import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts, fetchPostsAndUsers} from "../actions";
import UserHeader from "./UserHeader";

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }


    renderList(){
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="description  ">
                        <h2>Title: {post.title}</h2>
                        <p>Body: {post.body}</p>
                    </div>
                    <UserHeader userId={post.userId}  />
                </div>

            );
        })
    }

    render() {


        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
}


const mapStateToProps = state =>
{
    return {posts: state.posts};
};

export default connect(mapStateToProps, {fetchPosts, fetchPostsAndUsers})(PostList);
