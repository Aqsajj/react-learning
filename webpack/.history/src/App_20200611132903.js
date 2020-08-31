import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import Users from './containers/Users';
class App extends Component {
    state = {}
    render() {
        return (
            <div>
                {/* adding routing  */}
                <div>
                    <Link to='/'> Users</Link>
                    <Link to="/users"> Pizza</Link>
                    <div>
                        {/* render routes */}
                        <Route path='/' exact component={Users}></Route>
                        <Route path='/pizza' exact component={}></Route>

                    </div>

                </div>
            </div>
        );
    }
}

export default App;