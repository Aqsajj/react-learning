import React, { Component } from 'react';
import Link from 'next/link'
import Router from 'next/router';

class indexPage extends Component {
    state = {}

    // life cycle hook- get initial props
    static getInitialProps(context) {
        console.log(context)
        const promise = new Promise(
            (resolve, reject) => {
                resolve({
                    appName: 'Super App'
                })
                setTimeout(() => { }, 1000)
            }
        )
        promise.then()
        return promise
    }
    render() {
        return (
            <div>
                <h1>
                    The Main Page of {this.props.appName}
                </h1>

                <p>Go to <Link href='/auth'><a>Auth</a></Link></p>

                <button onClick={() => {
                    Router.push('/auth')
                }}>
                    Auth Button
            </button>
            </div>
        );
    }
}

export default indexPage;