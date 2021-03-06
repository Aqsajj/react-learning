import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';
import { Route } from 'react-router-dom'
import Posts from './posts/posts'
import NewPost from './NewPost/NewPost'

import './Blog.css'

class Blog extends Component {

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
                <Route path="/" exact component={Posts} />
                <Route path="/new-posts" component={NewPost} />
            </div>
        );
    }
}

export default Blog;