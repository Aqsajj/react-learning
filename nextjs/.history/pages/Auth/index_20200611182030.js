import React, { Component } from 'react';
import User from '../../components/User';

const authIndexPage = () => {
    return (
        <div>
            <h1>The Auth Index Page of {this.props.app}</h1>
            <User name='Aqsa' age='23'></User>
        </div>
    );
}

authIndexPage.getInitialProps = (context) => {
    console.log(context)
    const promise = new Promise(
        (resolve, reject) => {
            resolve({
                app: 'Super App'
            })
            setTimeout(() => { }, 1000)
        }
    )
    promise.then()
    return promise
}
export default authIndexPage;