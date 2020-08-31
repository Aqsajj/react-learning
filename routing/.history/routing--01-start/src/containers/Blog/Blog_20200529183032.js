import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink } from 'react-router-dom'
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
                            <li>
                                <NavLink to="/" activeStyle={{}} exact>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: "/new-post",
                                    hash: '#submit',// to jump to the point
                                    search: '?quick-submit=true'
                                }}> New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
                <Route path="/:id" component={NewPost} />
            </div>
        );
    }
}

export default Blog;