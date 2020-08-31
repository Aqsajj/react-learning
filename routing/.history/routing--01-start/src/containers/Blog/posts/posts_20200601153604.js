import React, { Component } from 'react';
import Post from '../../../components/Post/Post'
import axios from '../../../axios'
import './posts.css';
import { Link, Route } from 'react-router-dom'
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: [],
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    componentDidMount() {
        console.log('mounting==>', this.props)
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                console.log("TCL: Posts -> componentDidMount -> posts", posts)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({ posts: updatedPosts });
                // console.log( response );
            })
            .catch(error => {
                // console.log(error);
                this.setState({ error: true });
            });
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Link to={'/' + post.id} key={post.id} >
                        <Post
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)} />

                    </Link >
                );
            })
                ;
        }
        return (
            <div>
                <section className="Posts" >
                    {posts}
                </section>
                <Route path={`${this.props.match.url}/:id`} component={FullPost} />
            </div>);
    }
}

export default Posts;