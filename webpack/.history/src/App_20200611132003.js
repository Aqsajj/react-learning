import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
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
                        <Route></Route>
                        <Route></Route>

                    </div>

                </div>
            </div>
        );
    }
}

export default App;