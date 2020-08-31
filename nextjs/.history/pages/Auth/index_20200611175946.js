import React, { Component } from 'react';
import User from '../../components/User';

const authIndexPage = () => {
    return (
        <div>
            <h1>The Auth Index Page</h1>
            <User name='Aqsa' age='23'></User>
        </div>
    );
}

export default authIndexPage;