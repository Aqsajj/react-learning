import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom'
import Posts from './posts/posts'
//import NewPost from './NewPost/NewPost'
import './Blog.css'
import AsyncComponent from '../../hoc/AsyncComponent';

// lazy loading
const asyncNewPost = AsyncComponent()
class Blog extends Component {

    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" activeStyle={{}} exact>Posts</NavLink>
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
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                </Switch>

            </div>
        );
    }
}

export default Blog;