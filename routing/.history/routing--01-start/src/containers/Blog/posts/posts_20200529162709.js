import React, { Component } from 'react';

import axios from '../../../axios'
class Posts extends Component {
    state = {
        posts: [],
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

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
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Posts
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />;
            });
        }
        return (<section className="Posts">
            {posts}
        </section>);
    }
}

export default Posts;