import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost'
import NewPost from './NewPost/NewPost'

class Blog extends Component {

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                console.log("TCL: Blog -> componentDidMount -> response posts", response.data)
                const posts = response.data.slice(0, 4);
                console.log("TCL: Blog -> componentDidMount -> posts", posts)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({ posts: updatedPosts });
                // console.log( response );
                console.log("TCL: Blog -> componentDidMount -> response", response)
            })
            .catch(error => {
                // console.log(error);
                this.setState({ error: true });
            });
    }

    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>

                        </ul>
                    </nav>
                </header>

                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;