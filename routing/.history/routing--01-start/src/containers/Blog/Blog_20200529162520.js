import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import posts from './posts/posts'

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
            </div>
        );
    }
}

export default Blog;